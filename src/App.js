import React, { useRef } from "react";

import Hero from "./components/Hero";
import Work from "./components/Work";

export default function App() {
    const sectionRef = useRef(null);

    function handleScroll() {
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <>
            <main>
                <Hero handleScroll={handleScroll} />
                <Work sectionRef={sectionRef} />
            </main>
            <footer className="mt-20 p-2 text-center text-xs text-gray-400">
                Copyright &copy; by curypd. All rights reserved.
            </footer>
        </>
    );
}
