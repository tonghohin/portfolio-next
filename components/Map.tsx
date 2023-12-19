"use client";

import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef } from "react";

export default function Map() {
    const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY as string,
        version: "weekly",
        libraries: ["places"]
    });
    const MY_LAT_LNG = { lat: 44.6483278, lng: -63.5728179 };
    const mapOptions: google.maps.MapOptions = {
        zoom: 8,
        center: MY_LAT_LNG,
        mapId: process.env.NEXT_PUBLIC_GOOGLE_MAP_ID,
        streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        zoomControl: false,
        keyboardShortcuts: false,
        backgroundColor: "#2b2b2b"
    };
    const mapRef = useRef<HTMLElement>(null);

    useEffect(() => {
        (async () => {
            try {
                const { Map } = await loader.importLibrary("maps");
                const map = new Map(mapRef.current as HTMLElement, mapOptions);
                setTimeout(() => {
                    new google.maps.Marker({
                        position: MY_LAT_LNG,
                        map,
                        title: "I'm here!",
                        animation: google.maps.Animation.DROP
                    });
                }, 2000);
            } catch (error) {
                console.error(error);
            }
        })();
    }, [MY_LAT_LNG, loader, mapOptions]);

    return <section id="map" ref={mapRef} />;
}
