import React, { useRef } from "react";

import Hero from "./components/Hero";
import Work from "./components/Work";
import Rewards from "./components/Rewards";
import Footer from "./components/Footer";

export default function App() {
    const sectionRef = useRef(null);

    function handleScroll() {
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <>
            <main>
                <Hero handleScroll={handleScroll} />
                <Rewards />
                <Work sectionRef={sectionRef} />
            </main>
            <Footer />
        </>
    );
}
