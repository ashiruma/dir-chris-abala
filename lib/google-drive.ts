// lib/google-drive.ts
import "server-only";
import { google } from 'googleapis';

const serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON || '{}');

const auth = new google.auth.GoogleAuth({
  credentials: serviceAccount,
  scopes: ['https://www.googleapis.com/auth/drive.readonly'],
});

const drive = google.drive({ version: 'v3', auth });

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