import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
    const req = await request.json();
    const { name, email, message } = req;

    if (name && email && message) {
        const result = await sendEmail(name, message, email);
        return NextResponse.json(result);
    } else {
        return NextResponse.json({ success: false });
    }
}

async function sendEmail(formName: string, formMessage: string, formEmail: string) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_SENDER,
            pass: process.env.PASSWORD
        }
    });

    const message = {
        from: process.env.EMAIL_SENDER,
        to: process.env.EMAIL_RECEIVER,
        subject: `Message from ${formName}`,
        text: `
    Name: ${formName}
    Message: ${formMessage}
    Email: ${formEmail}
    `
    };

    try {
        await transporter.sendMail(message);
        return { success: true };
    } catch (error) {
        console.error("--- nodemailer error ---", error);
        return { success: false };
    }
}
