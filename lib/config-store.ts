// lib/config-store.ts
import "server-only";
import { google } from "googleapis";

// Create a config.json file in your Google Drive root folder
// then paste its file ID here
const CONFIG_FILE_ID = process.env.GOOGLE_CONFIG_FILE_ID || "";

export interface SiteConfig {
  aboutNarrative: string;
  cvDriveId: string;
  complianceShield: {
    title: string;
    description: string;
    trustText: string;
    systemsText: string;
    marketText: string;
  };
}

const DEFAULT_CONFIG: SiteConfig = {
  aboutNarrative: "I ensure all legal clearances, technical specs, and data protocols are handled professionally.",
  cvDriveId: "",
  complianceShield: {
    title: "COMPLIANCE IS YOUR RISK SHIELD",
    description: "Large organizations fear amateur mistakes.",
    trustText: "Corporations and NGOs buy reliability, not just creativity.",
    systemsText: "Compliance standards prove results aren't a fluke.",
    marketText: "Every delivery meets international technical and legal standards.",
  },
};

function getDriveClient() {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!raw) return null;
  try {
    const sa = JSON.parse(raw);
    if (sa.private_key) sa.private_key = sa.private_key.replace(/\\n/g, "\n");
    const auth = new google.auth.GoogleAuth({
      credentials: sa,
      scopes: ["https://www.googleapis.com/auth/drive"],
    });
    return google.drive({ version: "v3", auth });
  } catch (e) {
    console.error("config-store: failed to init Drive client", e);
    return null;
  }
}

export async function getConfig(): Promise<SiteConfig> {
  const drive = getDriveClient();
  if (!drive || !CONFIG_FILE_ID) {
    console.warn("config-store: no Drive client or CONFIG_FILE_ID — using defaults");
    return DEFAULT_CONFIG;
  }

  try {
    const res = await drive.files.get(
      { fileId: CONFIG_FILE_ID, alt: "media" },
      { responseType: "json" }
    );
    return { ...DEFAULT_CONFIG, ...(res.data as Partial<SiteConfig>) };
  } catch (e) {
    console.error("config-store: failed to read config from Drive", e);
    return DEFAULT_CONFIG;
  }
}

export async function updateConfig(newConfig: Partial<SiteConfig>): Promise<SiteConfig> {
  const drive = getDriveClient();
  if (!drive || !CONFIG_FILE_ID) {
    throw new Error("Drive not configured — cannot save config");
  }

  const current = await getConfig();
  const updated: SiteConfig = {
    ...current,
    ...newConfig,
    complianceShield: {
      ...current.complianceShield,
      ...(newConfig.complianceShield || {}),
    },
  };

  await drive.files.update({
    fileId: CONFIG_FILE_ID,
    media: {
      mimeType: "application/json",
      body: JSON.stringify(updated, null, 2),
    },
  });

  return updated;
}