import { Metadata } from "next";
import { ContactForm } from "./_components/ContactForm";
import { Map } from "./_components/Map";
import "./contact.css";

export const metadata: Metadata = {
    title: "Hin | Full Stack Developer - Contact"
};

export default function Page() {
    return (
        <main id="contact">
            <section id="contactInfo">
                <h1>
                    <span>C</span>
                    <span>o</span>
                    <span>n</span>
                    <span>t</span>
                    <span>a</span>
                    <span>c</span>
                    <span>t</span> <span>m</span>
                    <span>e</span>
                </h1>
                <p className="slideIn">
                    <a id="mail" href="mailto:tonghohin77@gmail.com">
                        tonghohin77@gmail.com
                    </a>
                </p>
                <aside>
                    <a className="slideIn" id="linkedin" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/hintong/" />
                    <a className="slideIn" id="github" target="_blank" rel="noreferrer" href="https://github.com/tonghohin" />
                </aside>
                <ContactForm />
            </section>
            <Map />
        </main>
    );
}
