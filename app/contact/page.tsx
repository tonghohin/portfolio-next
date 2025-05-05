import Link from "next/link";
import { ContactForm } from "./_components/contact-form";
import type { Metadata } from "next";

export default function Contact() {
    return (
        <div className="flex flex-col gap-4">
            <p>
                Get in touch or send me an email directly at{" "}
                <Link href="mailto:tonghohin77@gmail.com" className="font-semibold">
                    tonghohin77@gmail.com
                </Link>
                .
            </p>
            <ContactForm />
        </div>
    );
}

export const metadata = {
    title: "Contact"
} satisfies Metadata;
