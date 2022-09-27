import React, { useRef } from "react";

import Hero from "./components/Hero";
import Work from "./components/Work";
import Rewards from "./components/Rewards";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { addPoemsToDB } from "./poems";

export default function App() {
    const rewardsRef = useRef(null);
    const workRef = useRef(null);

    // React.useEffect(() => {
    //     addPoemsToDB();
    // }, []);

    function handleScrollRewards() {
        rewardsRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    function handleScrollWork() {
        workRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <>
            <Header
                handleScrollRewards={handleScrollRewards}
                handleScrollWork={handleScrollWork}
            />
            <main>
                <Hero handleScroll={handleScrollWork} />
                <Rewards sectionRef={rewardsRef} />
                <Work sectionRef={workRef} />
            </main>
            <Footer />
        </>
    );
}
