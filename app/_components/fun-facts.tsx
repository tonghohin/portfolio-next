"use client";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { SmileIcon } from "lucide-react";
import { useState } from "react";

export function FunFacts() {
    const FUN_FACTS = ["I've been playing guitar for more than 10 years.", "I cycled around whole Taiwan in 10 days.", "I did skydiving twice.", "I swam under the Victoria Falls.", "I'm fluent in three languages.", "My favourite movie is Pulp Fiction.", "My favourite song is Comfortably Numb.", "I broke into tech without a CS degree.", "I traveled solo in Africa and Europe.", "I like La La Land."];

    const [index, setIndex] = useState<number | null>(null);

    function handleOpenChange(open: boolean) {
        if (open) {
            const newIndex = Math.floor(Math.random() * FUN_FACTS.length);
            setIndex(newIndex);
        }
    }

    return (
        <Popover onOpenChange={handleOpenChange}>
            <PopoverTrigger>
                <SmileIcon className="text-primary size-4" />
            </PopoverTrigger>
            <PopoverContent className="w-fit text-sm">{index !== null && FUN_FACTS[index]}</PopoverContent>
        </Popover>
    );
}
