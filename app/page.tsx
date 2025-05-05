import * as motion from "motion/react-client";

export default function About() {
    const aboutItems = ["Born in Hong Kong. Based in Toronto now.", "I work full stack — from UI to DevOps.", "I've built web apps, CLI tools, and browser extensions.", "I mostly use TypeScript, Next.js, Express, Go, MongoDB, SQL and AWS."];

    return (
        <ul className="flex flex-col gap-4">
            {aboutItems.map((item, index) => (
                <motion.li
                    key={index}
                    className="flex items-center gap-4"
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { duration: 1, delay: index * 0.2 }
                    }}>
                    <span className="self-start">•</span>
                    <p>{item}</p>
                </motion.li>
            ))}
        </ul>
    );
}
