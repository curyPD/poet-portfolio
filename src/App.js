import React, { useRef, useState } from "react";

import Hero from "./components/Hero";
import Accordion from "./components/Accordion";
import Poem from "./components/Poem";

import { HiOutlineChevronLeft } from "react-icons/hi";

import data from "./poems";

export default function App() {
    const [curPoem, setCurPoem] = useState(null);
    const sectionRef = useRef(null);

    function handleScroll() {
        sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <>
            <main>
                <Hero handleScroll={handleScroll} />
                <section
                    ref={sectionRef}
                    className="py-14 sm:py-16 md:py-20 xl:py-24"
                >
                    <div className="container mx-auto px-6 md:px-12 lg:px-6 xl:max-w-screen-xl xl:px-12">
                        <h2 className="mb-10 text-2xl font-semibold text-gray-900 sm:text-3xl xl:mb-12 xl:text-4xl">
                            Произведения
                        </h2>

                        {curPoem && (
                            <div className="lg:hidden">
                                <button
                                    className="mb-5 flex items-center gap-2 py-1"
                                    onClick={() => setCurPoem(null)}
                                >
                                    <HiOutlineChevronLeft className="text-base text-amber-500" />
                                    <span className="text-xs text-gray-600">
                                        Категории
                                    </span>
                                </button>
                            </div>
                        )}

                        <div className="flex flex-col-reverse gap-8 lg:flex-row">
                            <Accordion
                                data={data}
                                setCurPoem={setCurPoem}
                                curPoem={curPoem}
                            />
                            {curPoem && <Poem poem={curPoem} />}
                        </div>
                    </div>
                </section>
            </main>
            <footer className="mt-20 p-2 text-center text-xs text-gray-400">
                Copyright &copy; by curypd. All rights reserved.
            </footer>
        </>
    );
}
