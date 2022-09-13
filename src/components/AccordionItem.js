import React, { useRef } from "react";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";

function AccordionItem(props) {
    const itemEl = useRef();

    const styles = {
        height: props.active ? itemEl.current.scrollHeight : "0px",
    };

    const titles = props.titles.map((title, i) => (
        <li
            key={i}
            className="mb-3 text-sm text-gray-700 transition-colors hover:text-gray-500 sm:text-base"
            onClick={() => props.setCurPoem(title)}
        >
            {title.title}
        </li>
    ));

    return (
        <article>
            <div
                onClick={props.handleClick}
                className="mb-2 inline-block cursor-pointer py-2"
            >
                <div className="flex items-center gap-3">
                    {props.active ? (
                        <HiOutlineMinus className="text-base text-amber-500 sm:text-lg" />
                    ) : (
                        <HiOutlinePlus className="text-base text-amber-500 sm:text-lg" />
                    )}
                    <h4 className="text-base font-medium text-gray-700 sm:text-lg xl:text-xl">
                        {props.heading}
                    </h4>
                </div>
            </div>

            <div
                ref={itemEl}
                className={`overflow-hidden transition-all duration-300 ${
                    props.active ? "mb-3 mt-1" : ""
                }`}
                style={styles}
            >
                <ul className="ml-10">{titles}</ul>
            </div>
        </article>
    );
}

export default AccordionItem;
