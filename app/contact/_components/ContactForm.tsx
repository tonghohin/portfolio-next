"use client";

import { Spinner } from "@/app/contact/_components/Spinner";
import { useState } from "react";

export function ContactForm() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [isSuccessful, setIsSuccessful] = useState<null | boolean>(null);
    const [isSending, setIsSending] = useState(false);

    function handleFormDataChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setFormData((prevFormData) => {
            return { ...prevFormData, [e.target.name]: e.target.value };
        });
    }

    async function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setIsSending(true);

        try {
            const res = await fetch("/contact/api", {
                method: "POST",
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            if (data.success) {
                setIsSuccessful(true);
                setFormData({ name: "", email: "", message: "" });
            } else {
                setIsSuccessful(false);
            }
        } catch (error) {
            console.log("--- email error ---", error);
            setIsSuccessful(false);
        } finally {
            setIsSending(false);
        }
    }

    return (
        <form className="slideIn stack" onSubmit={handleFormSubmit}>
            <div className="row">
                <div className="stack grow">
                    <label htmlFor="nameInput">Name</label>
                    <input id="nameInput" type="text" name="name" placeholder="Name" required autoComplete="off" className="formInputs" value={formData.name} onChange={handleFormDataChange} disabled={isSending} />
                </div>
                <div className="stack grow">
                    <label htmlFor="emailInput">Email</label>
                    <input id="emailInput" type="email" name="email" placeholder="Email" required autoComplete="off" className="formInputs" value={formData.email} onChange={handleFormDataChange} disabled={isSending} />
                </div>
            </div>
            <div className="stack">
                <label htmlFor="messageInput">Message</label>
                <textarea id="messageInput" name="message" placeholder="Message" required autoComplete="off" className="formInputs" value={formData.message} onChange={handleFormDataChange} disabled={isSending} />
            </div>
            {isSuccessful !== null && (isSuccessful ? <div id="successMessage">Message sent!</div> : <div id="failureMessage">Sorry, please send the form again.</div>)}
            <button type="submit" className="stack sendButton">
                {isSending ? <Spinner /> : <span>Send</span>}
            </button>
        </form>
    );
}
