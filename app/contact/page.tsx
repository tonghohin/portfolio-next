import * as motion from "motion/react-client";
import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "./_components/contact-form";

export default function Contact() {
    return (
        <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { duration: 1 }
            }}>
            <p>
                Get in touch or send me an email directly at{" "}
                <Link href="mailto:tonghohin77@gmail.com" className="font-semibold">
                    tonghohin77@gmail.com
                </Link>
                .
            </p>
            <ContactForm />
        </motion.div>
    );
}

export const metadata = {
    title: "Contact"
} satisfies Metadata;
