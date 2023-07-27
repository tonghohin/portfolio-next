import FunFacts from "@/components/FunFacts";
import { Metadata } from "next";
import Image from "next/image";
import "./about.css";

export const metadata: Metadata = {
    title: "Hin | Full Stack Developer - About"
};

export default function Page() {
    return (
        <main id="about">
            <header>
                <h1>About</h1>
                <a href="/Resume_Ho Hin Tong.pdf" download="Resume_Hin_Tong" target="_blank" rel="noreferrer" id="pdf">
                    Get my resume!
                </a>
            </header>
            <article>
                <h3>WHO AM I</h3>
                <p>
                    My name is Hin, and I'm a dedicated <em>full stack developer</em>.
                </p>
                <p>I'm aspired to build softwares which make people's lives easier and better.</p>
                <p>I'm from Hong Kong, currently based in Canada.</p>
            </article>
            <article>
                <h3>SKILLS</h3>
                <div className="flexContainer">
                    <div className="iconWithText">
                        <Image src="/icons/javascript.svg" alt="Javascript Icon" width={30} height={30} />
                        <p>
                            <p>JavaScript</p>
                        </p>
                    </div>
                    <div className="iconWithText">
                        <Image src="/icons/typescript.svg" alt="Typescript Icon" width={30} height={30} />
                        <p>TypeScript</p>
                    </div>
                    <div className="iconWithText">
                        <Image src="/icons/react.svg" alt="React Icon" width={30} height={30} />
                        <p>React</p>
                    </div>
                    <div className="iconWithText">
                        <Image src="/icons/nextJs.svg" alt="NextJs Icon" width={30} height={30} />
                        <p>Next.js</p>
                    </div>
                    <div className="iconWithText">
                        <Image src="/icons/redux.svg" alt="Redux Icon" width={30} height={30} />
                        <p>Redux</p>
                    </div>
                    <div className="iconWithText">
                        <Image src="/icons/tailwind.svg" alt="Tailwind  Icon" width={30} height={30} />
                        <p>Tailwind CSS</p>
                    </div>
                    <div className="iconWithText">
                        <Image src="/icons/nodejs.svg" alt="Nodejs Icon" width={30} height={30} />
                        <p>Node.js</p>
                    </div>
                    <div className="iconWithText">
                        <Image src="/icons/express.svg" alt="Express Icon" width={30} height={30} />
                        <p>Express</p>
                    </div>
                    <div className="iconWithText">
                        <Image src="/icons/mysql.svg" alt="Mysql Icon" width={30} height={30} />
                        <p>MySQL</p>
                    </div>
                    <div className="iconWithText">
                        <Image src="/icons/mongodb.svg" alt="Mongodb Icon" width={30} height={30} />
                        <p>MongoDB</p>
                    </div>
                    <div className="iconWithText">
                        <Image src="/icons/firebase.svg" alt="Firebase Icon" width={30} height={30} />
                        <p>Firebase</p>
                    </div>
                    <div className="iconWithText">
                        <Image src="/icons/graphql.svg" alt="Graphql Icon" width={30} height={30} />
                        <p>GraphQL</p>
                    </div>
                    <div className="iconWithText">
                        <Image src="/icons/electron.svg" alt="Electron Icon" width={30} height={30} />
                        <p>Electron</p>
                    </div>
                    <div className="iconWithText">
                        <Image src="/icons/react.svg" alt="React Native Icon" width={30} height={30} />
                        <p>React Native</p>
                    </div>
                    <div className="iconWithText">
                        <Image src="/icons/jest.svg" alt="Jest Icon" width={30} height={30} />
                        <p>Jest</p>
                    </div>
                    <div className="iconWithText">
                        <Image src="/icons/git.svg" alt="Git Icon" width={30} height={30} />
                        <p>Git</p>
                    </div>
                    <div className="iconWithText">
                        <Image src="/icons/jira.svg" alt="Jira Icon" width={30} height={30} />
                        <p>Jira</p>
                    </div>
                    <div className="iconWithText">
                        <Image src="/icons/docker.svg" alt="Docker Icon" width={30} height={30} />
                        <p>Docker</p>
                    </div>
                </div>
            </article>
            <FunFacts />
        </main>
    );
}
