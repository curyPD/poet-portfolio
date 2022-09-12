import React, { useState } from "react";

import Hero from "./components/Hero";
import Accordion from "./components/Accordion";
import Poem from "./components/Poem";

import { HiOutlineChevronLeft } from "react-icons/hi";

export default function App() {
    const [curPoem, setCurPoem] = useState(null);
    return (
        <main>
            <Hero />
            <section className="py-14 sm:py-16 md:py-20 xl:py-24">
                <div className="container mx-auto px-6 md:px-12 lg:px-6 xl:max-w-screen-xl xl:px-12">
                    <h2 className="mb-10 text-2xl font-semibold text-gray-900 sm:text-3xl xl:mb-12 xl:text-4xl">
                        Произведения
                    </h2>
                    <div className="flex gap-8">
                        {!curPoem && <Accordion />}
                        {curPoem && (
                            <div className="flex-1">
                                <button
                                    className="mb-5 flex items-center gap-2 py-1"
                                    onClick={() => setCurPoem(null)}
                                >
                                    <HiOutlineChevronLeft className="text-base text-amber-500" />
                                    <span className="text-xs text-gray-600">
                                        Категории
                                    </span>
                                </button>
                                <Poem />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </main>
    );
}
