import React, { useState } from "react";

import AccordionItem from "./AccordionItem";

function Accordion(props) {
    const [activeItem, setActiveItem] = useState(null);

    function onItemClick(i) {
        if (i === activeItem) {
            setActiveItem(null);
            return;
        }
        setActiveItem(i);
    }

    const accordionItems = props.data.map((obj, i) => (
        <AccordionItem
            heading={obj.heading}
            titles={obj.titles}
            key={i}
            active={activeItem === i}
            handleClick={() => onItemClick(i)}
            setCurPoem={props.setCurPoem}
            curPoem={props.curPoem}
        />
    ));

    return (
        <div
            className={`flex-1 ${props.curPoem ? "hidden" : "block"} lg:block`}
        >
            {accordionItems}
        </div>
    );
}

export default Accordion;
