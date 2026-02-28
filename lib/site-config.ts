// lib/site-config.ts
import "server-only";
import { google } from "googleapis";

// Replace this with the actual ID of your config.json file in Google Drive
const CONFIG_FILE_ID = "YOUR_GOOGLE_DRIVE_CONFIG_FILE_ID";

export interface SiteConfig {
  aboutText: string;
  cvId: string;
  shieldTitle: string;
  trustText: string;
  systemsText: string;
  marketText: string;
}

const DEFAULT_CONFIG: SiteConfig = {
  aboutText: "I am a visual storyteller based in Nairobi, Kenya. With a passion for documentary and commercial work, I craft narratives that move people.",
  cvId: "",
  shieldTitle: "Director of Production & Compliance",
  trustText: "Trusted by brands across East Africa",
  systemsText: "Full production pipeline from concept to delivery",
  marketText: "Commercial, Documentary, Portrait",
};

function getDriveClient() {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!raw) return null;

  try {
    const sa = JSON.parse(raw);
    if (sa.private_key) {
      sa.private_key = sa.private_key.replace(/\\n/g, "\n");
    }
    const auth = new google.auth.GoogleAuth({
      credentials: sa,
      scopes: ["https://www.googleapis.com/auth/drive.readonly"],
    });
    return google.drive({ version: "v3", auth });
  } catch (e) {
    console.error("Failed to init Drive for config:", e);
    return null;
  }
}

export async function getLiveConfig(): Promise<SiteConfig> {
  const drive = getDriveClient();
  if (!drive || CONFIG_FILE_ID === "YOUR_GOOGLE_DRIVE_CONFIG_FILE_ID") {
    console.warn("Config: using defaults (no Drive client or FILE_ID not set)");
    return DEFAULT_CONFIG;
  }

  try {
    const response = await drive.files.get(
      { fileId: CONFIG_FILE_ID, alt: "media" },
      { responseType: "json" }
    );
    return { ...DEFAULT_CONFIG, ...(response.data as Partial<SiteConfig>) };
  } catch (e) {
    console.error("Failed to fetch config from Drive:", e);
    return DEFAULT_CONFIG;
  }
}