import Image from "next/image";
import "./work.css";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hin | Full Stack Developer - Work"
};

export default function Page() {
    return (
        <main id="work">
            <h1>
                <span>W</span>
                <span>o</span>
                <span>r</span>
                <span>k</span>
            </h1>
            <section>
                <article>
                    <div>
                        <h3>Company Website for NovaXpress</h3>
                        <p>
                            Single-handedly built with <em>TypeScript</em>, <em>React</em>, <em>Express</em> and <em>MongoDB</em>.
                        </p>
                    </div>
                    <Image alt="Company Website for NovaXpress Work Sample" src="/images/work-novaxpress.webp" width={600} height={500} />
                    <a target="_blank" rel="noreferrer" href="https://novaxpress.ca"></a>
                </article>
                <article>
                    <div>
                        <h3>Property Management Portal</h3>
                        <p>This is a property management portal built with TypeScript and JavaScript.</p>
                        <p>
                            <em>Frontend: </em>React, Redux, Tailwind CSS
                        </p>
                        <p>
                            <em>Backend: </em>Node.js, Express
                        </p>
                        <p>
                            <em>Database: </em>MongoDB, Mongoose, Firebase
                        </p>
                        <p>
                            <em>Authentication: </em>JWT, Firebase
                        </p>
                        <p>
                            <em>Hosting: </em>Cyclic
                        </p>
                    </div>
                    <Image alt="Property Management Portal Work Sample" src="/images/work-portal.webp" width={600} height={500} />
                    <a target="_blank" rel="noreferrer" href="https://github.com/tonghohin/firebase-portal"></a>
                </article>
                <article>
                    <div>
                        <h3>Chat Room App</h3>
                        <p>This is a real-time communication app built with JavaScript.</p>
                        <p>
                            <em>Frontend: </em>HTML, CSS, JavaScript, DOM API
                        </p>
                        <p>
                            <em>Backend: </em>Node.js, Express, Socket.io
                        </p>
                        <p>
                            <em>Database: </em>MySQL. PlanetScale
                        </p>
                        <p>
                            <em>Authentication: </em>Passport.js
                        </p>
                        <p>
                            <em>Hosting: </em>Render
                        </p>
                    </div>
                    <Image alt="Chat Room App Work Sample" src="/images/work-chatroom.webp" width={600} height={500} />
                    <a target="_blank" rel="noreferrer" href="https://github.com/tonghohin/chatapp"></a>
                </article>
                <article>
                    <div>
                        <h3>Risk Data Visualization Application</h3>
                        <p>
                            This is a data visualization app built with <em>TypeScript</em>, <em>React</em>, <em>Next.js</em>, <em>Chart.js</em> and <em>Leaflet.js</em>.
                        </p>
                    </div>
                    <Image alt="Risk Data Visualization Application Work Sample" src="/images/work-risk.webp" width={600} height={500} />
                    <a target="_blank" rel="noreferrer" href="https://github.com/tonghohin/risk-viz"></a>
                </article>
                <article>
                    <div>
                        <h3>Halifax Bus Tracker App</h3>
                        <p>
                            This is an application that tracks the real-time data of all the Halifax buses on the road! I'm using <em>Leaflet.js</em> and <em>geoJSON</em> for mapping the bus locations.
                        </p>
                    </div>
                    <Image alt="Halifax Bus Tracker App Work Sample" src="/images/work-bus.webp" width={600} height={500} />
                    <a target="_blank" href="https://halifaxbus.cyclic.app"></a>
                </article>
                <article>
                    <div>
                        <h3>Weather Forecast App</h3>
                        <p>
                            This is an application for checking the current weather and weather forecast of any locations! I'm using the <em>Fetch API</em> to retrieve the data and <em>DOM API</em> to display the data in the UI.
                        </p>
                    </div>
                    <Image alt="Weather Forecast App Work Sample" src="/images/work-weather.webp" width={600} height={500} />
                    <a target="_blank" href="https://tonghohin.github.io/weatherForecastApp/"></a>
                </article>
            </section>
        </main>
    );
}
