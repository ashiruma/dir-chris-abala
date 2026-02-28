"use server";
import nodemailer from "nodemailer";

export async function sendEmail(formData: FormData) {
  const name = formData.get("organization");
  const email = formData.get("email");
  const subject = formData.get("subject");
  const message = formData.get("message");

  if (!name || !email || !subject || !message) {
    return { success: false };
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email as string,
      subject: `[Portfolio Inquiry] ${subject}`,
      text: `From: ${name} (${email})\n\nMessage:\n${message}`,
    });
    return { success: true };
  } catch (error) {
    console.error("Email error:", error);
    return { success: false };
  }
}