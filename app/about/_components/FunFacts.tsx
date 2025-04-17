"use client";

import { useState } from "react";

export function FunFacts() {
    const FUN_FACTS = ["Click to see a random fun fact about me!", "I've been playing guitar for more than 10 years.", "I cycled around whole Taiwan.", "I did skydiving twice.", "I swam under the Victoria Falls.", "I'm fluent in three languages.", "My favourite movie is The Pianist.", "My favourite song is Comfortably Numb.", "That's all! Thanks for stopping by!"];
    const MAX_COUNT = FUN_FACTS.length - 1;

    const [count, setCount] = useState(0);

    return (
        <article>
            <h3>RANDOM FUN FACTS</h3>
            <aside>
                <button id="arrow" onClick={count < MAX_COUNT ? () => setCount((prevCount) => prevCount + 1) : undefined}>
                    <div id="ripple" />
                </button>
                <p id="funFact">{FUN_FACTS[count]}</p>
            </aside>
        </article>
    );
}
