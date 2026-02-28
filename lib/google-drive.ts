// lib/google-drive.ts
import "server-only";
import { google } from "googleapis";

export interface DriveImage {
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
  type: "image" | "video";
}

export interface Category {
  id: string;
  title: string;
  slug: string;
  images: DriveImage[];
}

const DEMO_CATEGORIES: Category[] = [
  {
    id: "demo-1",
    title: "Visual Documentary",
    slug: "visual-documentary",
    images: [
      { id: "d1", title: "Documentary 1", url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800", thumbnailUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=400", type: "image" },
      { id: "d2", title: "Documentary 2", url: "https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?q=80&w=800", thumbnailUrl: "https://images.unsplash.com/photo-1504439904031-93ded9f93e4e?q=80&w=400", type: "image" },
      { id: "d3", title: "Documentary 3", url: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800", thumbnailUrl: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=400", type: "image" },
    ],
  },
  {
    id: "demo-2",
    title: "Brand Narrative",
    slug: "brand-narrative",
    images: [
      { id: "b1", title: "Brand 1", url: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=800", thumbnailUrl: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=400", type: "image" },
      { id: "b2", title: "Brand 2", url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800", thumbnailUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400", type: "image" },
      { id: "b3", title: "Brand 3", url: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=800", thumbnailUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=400", type: "image" },
    ],
  },
  {
    id: "demo-3",
    title: "Portrait Series",
    slug: "portrait-series",
    images: [
      { id: "p1", title: "Portrait 1", url: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=800", thumbnailUrl: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=400", type: "image" },
      { id: "p2", title: "Portrait 2", url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800", thumbnailUrl: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=400", type: "image" },
    ],
  },
];

function getDriveClient() {
  const raw = process.env.GOOGLE_SERVICE_ACCOUNT_JSON;
  if (!raw) return null;

  try {
    const serviceAccount = JSON.parse(raw);

    if (serviceAccount.private_key) {
      serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, "\n");
    }

    const auth = new google.auth.GoogleAuth({
      credentials: serviceAccount,
      scopes: ["https://www.googleapis.com/auth/drive.readonly"],
    });

    return google.drive({ version: "v3", auth });
  } catch (e) {
    console.error("Failed to initialize Google Drive client:", e);
    return null;
  }
}

export async function getCategories(): Promise<Category[]> {
  const drive = getDriveClient();

  if (!drive) {
    console.warn("No Drive client — using demo categories");
    return DEMO_CATEGORIES;
  }

  const rootId = process.env.GOOGLE_DRIVE_ROOT_FOLDER_ID!;

  try {
    const foldersRes = await drive.files.list({
      q: `'${rootId}' in parents and mimeType='application/vnd.google-apps.folder' and trashed=false`,
      fields: "files(id, name)",
      pageSize: 50,
    });

    const categories: Category[] = [];

    for (const folder of foldersRes.data.files || []) {
      const images = await getMediaFromFolder(drive, folder.id!);
      categories.push({
        id: folder.id!,
        title: folder.name!,
        slug: folder.name!.toLowerCase().replace(/\s+/g, "-"),
        images,
      });
    }

    return categories.sort((a, b) => a.title.localeCompare(b.title));
  } catch (e) {
    console.error("Error fetching categories from Drive:", e);
    return DEMO_CATEGORIES;
  }
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const categories = await getCategories();
  return categories.find((c) => c.slug === slug) || null;
}

async function getMediaFromFolder(drive: any, folderId: string): Promise<DriveImage[]> {
  const res = await drive.files.list({
    q: `'${folderId}' in parents and trashed=false`,
    fields: "files(id, name, mimeType, thumbnailLink, webViewLink)",
    pageSize: 50,
  });

  return (res.data.files || []).map((file: any) => ({
    id: file.id!,
    title: file.name!,
    url: file.mimeType?.startsWith("video")
      ? `https://drive.google.com/file/d/${file.id}/preview`
      : `https://drive.google.com/uc?id=${file.id}`,
    thumbnailUrl:
      file.thumbnailLink ||
      `https://drive.google.com/thumbnail?id=${file.id}&sz=w400`,
    type: file.mimeType?.startsWith("video") ? "video" : "image",
  }));
}