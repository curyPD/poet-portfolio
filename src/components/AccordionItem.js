import React, { useRef } from "react";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";

function AccordionItem(props) {
    const itemEl = useRef();

    const styles = {
        height: props.active ? itemEl.current.scrollHeight : "0px",
    };

    const titles = props.titles.map((title, i) => (
        <li key={i} className="mb-3 text-sm text-gray-700 sm:text-base">
            {title}
        </li>
    ));

    return (
        <article>
            <div
                onClick={props.handleClick}
                className="flex cursor-pointer items-center gap-3 py-2"
            >
                {props.active ? (
                    <HiOutlineMinus className="text-base text-amber-500 sm:text-lg" />
                ) : (
                    <HiOutlinePlus className="text-base text-amber-500 sm:text-lg" />
                )}
                <h4 className="text-base font-medium text-gray-700 sm:text-lg">
                    {props.heading}
                </h4>
            </div>

            <div
                ref={itemEl}
                className={`overflow-hidden transition-all duration-300 ${
                    props.active ? "my-3" : ""
                }`}
                style={styles}
            >
                <ul className="ml-10">{titles}</ul>
            </div>
        </article>
    );
}

export default AccordionItem;
