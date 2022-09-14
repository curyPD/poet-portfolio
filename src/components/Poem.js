import React, { useState } from "react";

function Poem({ poem }) {
    function formatString(string) {
        const formattedString = string
            .replaceAll("\n", "<br />")
            .replace("<br />", "");
        return formattedString;
    }
    return (
        <article className="flex-1">
            <h3 className="mb-5 text-lg font-semibold leading-tight text-gray-800 sm:text-xl lg:mt-2 xl:mb-7 xl:text-2xl">
                {poem.title}
            </h3>
            <p
                className="text-xs text-gray-800 sm:text-sm lg:text-base"
                dangerouslySetInnerHTML={{ __html: formatString(poem.content) }}
            ></p>
        </article>
    );
}

export default Poem;
