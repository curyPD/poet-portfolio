import React, { useState } from "react";

function Poem({ poem }) {
    return (
        <article>
            <h3 className="mb-5 text-xl font-semibold text-gray-800 lg:mt-2 xl:mb-7 xl:text-2xl">
                {poem.title}
            </h3>
            <p
                className="text-base text-gray-800 "
                dangerouslySetInnerHTML={{ __html: poem.content }}
            ></p>
        </article>
    );
}

export default Poem;
