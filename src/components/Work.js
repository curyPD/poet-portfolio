import React, { useState, useEffect } from "react";

import { app } from "../firebase";
import { getDatabase, ref, onValue } from "firebase/database";

import { HiOutlineChevronLeft } from "react-icons/hi";

import Accordion from "./Accordion";
import Poem from "./Poem";

function Work({ sectionRef }) {
    const [work, setWork] = useState([]);
    const [curPoem, setCurPoem] = useState({});

    useEffect(() => {
        const db = getDatabase(app);
        const categoriesRef = ref(db, "categories");
        onValue(
            categoriesRef,
            (snapshot) => {
                const data = snapshot.val();
                const dataEntries = Object.entries(data);
                const sortedDataEntries = dataEntries.reduce((acc, entry) => {
                    switch (entry[0]) {
                        case "philosophical":
                            acc[0] = entry;
                            break;
                        case "motherland":
                            acc[1] = entry;
                            break;
                        case "nature":
                            acc[2] = entry;
                            break;
                        case "love":
                            acc[3] = entry;
                            break;
                        case "misc":
                            acc[4] = entry;
                            break;
                        default:
                            console.log("No category matches");
                    }
                    return acc;
                }, []);
                setWork(sortedDataEntries);
            },
            {
                onlyOnce: true,
            }
        );
    }, []);

    function getPoem(category, titleId) {
        const db = getDatabase(app);
        const poemRef = ref(db, `poems/${category}/${titleId}`);
        onValue(
            poemRef,
            (snapshot) => {
                const data = snapshot.val();
                setCurPoem(data);
            },
            {
                onlyOnce: true,
            }
        );
    }

    return (
        <section ref={sectionRef} className="py-14 sm:py-16 md:py-20 xl:py-24">
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
                            <HiOutlineChevronLeft className="text-base text-orange-400" />
                            <span className="text-xs text-gray-600">Темы</span>
                        </button>
                    </div>
                )}

                <div className="flex flex-col-reverse gap-8 lg:flex-row">
                    <Accordion
                        categories={work}
                        setCurPoem={getPoem}
                        curPoem={curPoem}
                    />
                    {curPoem && <Poem poem={curPoem} />}
                </div>
            </div>
        </section>
    );
}

export default Work;
