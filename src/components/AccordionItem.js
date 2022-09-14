import React, { useState, useEffect, useRef } from "react";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";

function AccordionItem(props) {
    const [itemHeight, setItemHeight] = useState(null);
    const itemEl = useRef(null);
    useEffect(() => {
        setItemHeight(itemEl.current.scrollHeight);
    }, []);

    const styles = {
        height: props.active ? itemHeight : "0px",
    };

    const titles = props.titles.map((title, i) => (
        <li key={i} className="mb-3 text-sm md:text-base">
            <button
                className={`transition-colors focus:text-amber-500 focus:outline-none ${
                    props.curPoem?.title === title.title
                        ? "font-medium text-amber-500"
                        : "text-gray-700 hover:text-gray-500"
                }`}
                onClick={() => props.setCurPoem(title)}
            >
                {title.title}
            </button>
        </li>
    ));

    return (
        <article>
            <div
                onClick={props.handleClick}
                className="mb-2 inline-block cursor-pointer py-2"
            >
                <button className="group flex items-center gap-3 focus:outline-none">
                    {props.active ? (
                        <HiOutlineMinus className="text-base text-amber-500 sm:text-lg" />
                    ) : (
                        <HiOutlinePlus className="text-base text-amber-500 sm:text-lg" />
                    )}
                    <h4 className="text-base font-medium text-gray-700 transition-colors group-focus:text-gray-600 sm:text-lg xl:text-xl">
                        {props.heading}
                    </h4>
                </button>
            </div>

            <div
                ref={itemEl}
                className={`overflow-hidden transition-all duration-300 ${
                    props.active ? "mb-3 mt-1" : ""
                }`}
                style={styles}
            >
                <ul className="ml-7 sm:ml-10">{titles}</ul>
            </div>
        </article>
    );
}

export default AccordionItem;
