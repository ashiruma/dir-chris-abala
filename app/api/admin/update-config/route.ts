// app/api/admin/update-config/route.ts
import { auth } from "@/auth";
import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

const CONFIG_FILE_ID = "YOUR_GOOGLE_DRIVE_CONFIG_FILE_ID";

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
    return null;
  }
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const drive = getDriveClient();
  if (!drive) {
    return NextResponse.json({ error: "Drive not configured" }, { status: 500 });
  }

  const body = await req.json();

  try {
    await drive.files.update({
      fileId: CONFIG_FILE_ID,
      media: {
        mimeType: "application/json",
        body: JSON.stringify(body, null, 2),
      },
    });
    return NextResponse.json({ success: true });
  } catch (e: any) {
    console.error("Failed to update config:", e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}