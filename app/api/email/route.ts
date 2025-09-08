import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_SERVER_USERNAME,
    pass: process.env.SMTP_SERVER_PASSWORD,
  },
  tls: {
    rejectUnauthorized: false, // allow self-signed certificates
  },
});

export async function POST(req: NextRequest) {
  try {
    const { name, company, email, phone, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    // Verify transporter
    await transporter.verify();

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.SMTP_SERVER_RECEIVER,
      subject: `New message from ${name}`,
      text: `
        Name: ${name}
        Company: ${company || "N/A"}
        Email: ${email}
        Phone: ${phone || "N/A"}
        Message: ${message}
              `,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Message sent:", info.messageId);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: unknown) {
    let message = "Error sending email";

    if (error instanceof Error) {
      // TypeScript now knows error has a message property
      message = error.message;
    }

    console.error("Error sending email:", error);

    return NextResponse.json({ message }, { status: 500 });
  }
}
