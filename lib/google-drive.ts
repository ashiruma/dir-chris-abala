// lib/google-drive.ts
import "server-only";
import { google } from 'googleapis';

let drive: any = null;

try {
  if (process.env.GOOGLE_SERVICE_ACCOUNT_JSON) {
    const serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON);
    const auth = new google.auth.GoogleAuth({
      credentials: serviceAccount,
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
    });
    drive = google.drive({ version: 'v3', auth });
  }
} catch (e) {
  console.log("Drive key not valid - using demo mode");
}

export interface DriveImage {
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
  type: 'image' | 'video';
}

export interface Category {
  id: string;
  title: string;
  slug: string;
  images: DriveImage[];
}

export async function getCategories(): Promise<Category[]> {
  if (!drive) {
    // Demo data so the site builds and goes live
    return [
      {
        id: "demo",
        title: "Demo Work",
        slug: "demo-work",
        images: [
          { id: "1", title: "Demo Image 1", url: "https://picsum.photos/id/1015/800/600", thumbnailUrl: "https://picsum.photos/id/1015/400/300", type: "image" },
          { id: "2", title: "Demo Image 2", url: "https://picsum.photos/id/102/800/600", thumbnailUrl: "https://picsum.photos/id/102/400/300", type: "image" },
          { id: "3", title: "Demo Image 3", url: "https://picsum.photos/id/106/800/600", thumbnailUrl: "https://picsum.photos/id/106/400/300", type: "image" },
        ],
      },
    ];
  }

  const rootId = process.env.GOOGLE_DRIVE_ROOT_FOLDER_ID!;

  const foldersRes = await drive.files.list({
    q: `'${rootId}' in parents and mimeType='application/vnd.google-apps.folder' and trashed=false`,
    fields: 'files(id, name)',
  });

  const categories: Category[] = [];

  for (const folder of foldersRes.data.files || []) {
    const images = await getMediaFromFolder(folder.id!);
    categories.push({
      id: folder.id!,
      title: folder.name!,
      slug: folder.name!.toLowerCase().replace(/\s+/g, '-'),
      images,
    });
  }

  return categories.sort((a, b) => a.title.localeCompare(b.title));
}

async function getMediaFromFolder(folderId: string): Promise<DriveImage[]> {
  const res = await drive.files.list({
    q: `'${folderId}' in parents and trashed=false`,
    fields: 'files(id, name, mimeType, thumbnailLink, webViewLink)',
  });

  return (res.data.files || []).map(file => ({
    id: file.id!,
    title: file.name!,
    url: `https://drive.google.com/uc?id=${file.id}`,
    thumbnailUrl: file.thumbnailLink || `https://drive.google.com/thumbnail?id=${file.id}&sz=w400`,
    type: file.mimeType?.startsWith('video') ? 'video' : 'image',
  }));
}