import React, { useState } from "react";

import AccordionItem from "./AccordionItem";

const poems = [
    {
        heading: "Философское",
        titles: [
            "Ты взгляд волнуешь",
            "Знакомый силуэт",
            "Сердце вдруг полыхнуло пожаром",
            "Занудный, неласковый дождь",
            "Горемычная любовь",
            "Васильки",
            "Родинка",
            "Лето выплыло в зенит",
        ],
    },
    {
        heading: "О Родине",
        titles: [
            "Ты взгляд волнуешь",
            "Знакомый силуэт",
            "Сердце вдруг полыхнуло пожаром",
            "Занудный, неласковый дождь",
            "Горемычная любовь",
            "Васильки",
            "Родинка",
            "Лето выплыло в зенит",
        ],
    },
    {
        heading: "О природе",
        titles: [
            "Ты взгляд волнуешь",
            "Знакомый силуэт",
            "Сердце вдруг полыхнуло пожаром",
            "Занудный, неласковый дождь",
            "Горемычная любовь",
            "Васильки",
            "Родинка",
            "Лето выплыло в зенит",
        ],
    },
    {
        heading: "Любовная лирика",
        titles: [
            "Ты взгляд волнуешь",
            "Знакомый силуэт",
            "Сердце вдруг полыхнуло пожаром",
            "Занудный, неласковый дождь",
            "Горемычная любовь",
            "Васильки",
            "Родинка",
            "Лето выплыло в зенит",
        ],
    },
    {
        heading: "Разное",
        titles: [
            "Ты взгляд волнуешь",
            "Знакомый силуэт",
            "Сердце вдруг полыхнуло пожаром",
            "Занудный, неласковый дождь",
            "Горемычная любовь",
            "Васильки",
            "Родинка",
            "Лето выплыло в зенит",
        ],
    },
];

function Accordion(props) {
    const [activeItem, setActiveItem] = useState(null);

    function onItemClick(i) {
        if (i === activeItem) {
            setActiveItem(null);
            return;
        }
        setActiveItem(i);
    }

    const accordionItems = poems.map((obj, i) => (
        <AccordionItem
            heading={obj.heading}
            titles={obj.titles}
            key={i}
            active={activeItem === i}
            handleClick={() => onItemClick(i)}
        />
    ));

    return <div className="flex-1">{accordionItems}</div>;
}

export default Accordion;
