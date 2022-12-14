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

    const accordionItems = props.categories.map((entry, i) => (
        <AccordionItem
            heading={entry[1].categoryName}
            titleEntries={Object.entries(entry[1].titles)}
            categoryId={entry[0]}
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
