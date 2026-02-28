"use server";
import { revalidatePath } from "next/cache";
import { updateConfig } from "@/lib/config-store";

export async function updateProfile(formData: FormData) {
  try {
    await updateConfig({
      aboutNarrative: formData.get("aboutNarrative") as string,
      cvDriveId: formData.get("cvDriveId") as string,
      complianceShield: {
        title: formData.get("shieldTitle") as string,
        description: formData.get("shieldDesc") as string,
        trustText: formData.get("trustText") as string,
        systemsText: formData.get("systemsText") as string,
        marketText: formData.get("marketText") as string,
      }
    });

    revalidatePath("/"); 
    return { success: true };
  } catch (error) {
    return { success: false };
  }
}