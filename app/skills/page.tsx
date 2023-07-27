import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./skills.css";

export const metadata: Metadata = {
    title: "Hin | Full Stack Developer - Skills"
};

export default function Page() {
    return (
        <main id="skillsMain">
            <section id="skills">
                <h1>
                    <span>S</span>
                    <span>k</span>
                    <span>i</span>
                    <span>l</span>
                    <span>l</span>
                    <span>s</span>
                </h1>
                <p>
                    Skilled in designing, developing and testing websites and applications with technologies including <em>JavaScript</em>, <em>TypeScript</em>, <em>React</em>, <em>Next.js</em>, <em>Redux</em>, <em>Node.js</em>, <em>Express</em>, <em>Tailwind CSS</em>, <em>React Native</em>, <em>Electron</em>, <em>HTML</em> and <em>CSS</em>.
                </p>
                <p>
                    Proficient in both SQL and NoSQL. Experienced in using <em>MySQL</em>, <em>SQLite</em>, <em>MongoDB</em>, <em>Firebase</em> and <em>GraphQL</em>.
                </p>
                <p>
                    Experienced in using source control system such as <em>Git</em>. Familiar with <em>Agile</em> methodology and comfortable in using <em>Jira</em>. Good knowledge of testing applications with <em>Jest</em>. Basic knowledge of <em>Docker</em>
                </p>
                <Link href="/work" id="previousWork">
                    See my previous work!
                </Link>
            </section>
            <ul id="skillsGraph">
                <li id="frontend">
                    <p>Frontend</p>
                    <Image src="/icons/javascript.svg" alt="Javascript Icon" width={30} height={30} />
                    <Image src="/icons/typescript.svg" alt="Typescript Icon" width={30} height={30} />
                    <Image src="/icons/react.svg" alt="React Icon" width={30} height={30} />
                    <Image src="/icons/nextJs.svg" alt="NextJs Icon" width={30} height={30} />
                    <Image src="/icons/redux.svg" alt="Redux Icon" width={30} height={30} />
                    <Image src="/icons/tailwind.svg" alt="Tailwind Icon" width={30} height={30} />
                    {/* <Image src="/icons/electron.svg" alt="Electron Icon" width={30} height={30} />
                    <Image src="/icons/html.svg" alt="HTML Icon" width={30} height={30} />
                    <Image src="/icons/css.svg" alt="CSS Icon" width={30} height={30} /> */}
                </li>
                <li id="backend">
                    <p>Backend</p>
                    <Image src="/icons/nodejs.svg" alt="NodeJs Icon" width={30} height={30} />
                    <Image src="/icons/express.svg" alt="Express Icon" width={30} height={30} />
                    <Image src="/icons/graphql.svg" alt="GraphQL Icon" width={30} height={30} />
                </li>
                <li id="database">
                    <p>Database</p>
                    <Image src="/icons/mysql.svg" alt="MySQL Icon" width={30} height={30} />
                    <Image src="/icons/mongodb.svg" alt="MongoDB Icon" width={30} height={30} />
                    <Image src="/icons/firebase.svg" alt="Firebase Icon" width={30} height={30} />
                    <Image src="/icons/sqlite.svg" alt="SQLite Icon" width={30} height={30} />
                </li>
                <li id="others">
                    <p>Others</p>
                    <Image src="/icons/git.svg" alt="Git Icon" width={30} height={30} />
                    <Image src="/icons/jest.svg" alt="Jest Icon" width={30} height={30} />
                    <Image src="/icons/jira.svg" alt="Jira Icon" width={30} height={30} />
                    <Image src="/icons/docker.svg" alt="Docker Icon" width={30} height={30} />
                </li>
            </ul>
        </main>
    );
}
