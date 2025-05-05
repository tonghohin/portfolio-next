import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { FormSchema, formSchema } from "../_schemas/form-schema";

export async function POST(request: NextRequest) {
    try {
        const req = await request.json();
        const parsedReq = formSchema.parse(req);
        await sendEmail(parsedReq);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.log("--- POST error ---", error);
        return NextResponse.json({ success: false });
    }
}

async function sendEmail({ name, email, message }: FormSchema) {
    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_SENDER,
                pass: process.env.PASSWORD
            }
        });

        const mailOptions = {
            from: process.env.EMAIL_SENDER,
            to: process.env.EMAIL_RECEIVER,
            subject: `Message from ${name}`,
            text: `Name: ${name} | Message: ${message} | Email: ${email}`
        };

        await transporter.sendMail(mailOptions);
    } catch (error) {
        console.error("--- sendEmail error ---", error);
        throw error;
    }
}
