import "./home.css";

export default function Page() {
    return (
        <main id="home">
            <p className="typewriter" id="firstSentence">
                Hi, I'm <span id="name">Hin</span>.
            </p>
            <p className="typewriter" id="secondSentence">
                I'm a Full Stack
            </p>
            <p className="typewriter" id="thirdSentence">
                Developer.
            </p>
            <footer>TypeScript, React, Next.js, Express, MongoDB, SQL and more...</footer>
        </main>
    );
}
