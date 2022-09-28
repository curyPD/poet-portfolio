import React from "react";
// import React, { useEffect, useRef } from "react";

function Poem({ poem }) {
    // const articleRef = useRef(null);
    // useEffect(() => {
    //     const rect = articleRef.current.getBoundingClientRect();
    //     const { y } = rect;
    //     console.log(y);
    //     if (y < 0) {
    //         articleRef.current.scrollIntoView({
    //             behavior: "smooth",
    //             block: "start",
    //             inline: "nearest",
    //         });
    //     }
    // }, [poem]);

    // function formatString(string) {
    //     const formattedString = string.trim().replaceAll("\n", "<br />");
    //     return formattedString;
    // }
    return (
        <div className="flex-1">
            <article>
                {/* <article ref={articleRef} className="lg:sticky lg:top-3"> */}
                <h3 className="mb-5 text-lg font-semibold leading-tight text-gray-800 sm:text-xl lg:mt-2 xl:mb-7 xl:text-2xl">
                    {poem.title}
                </h3>
                <p
                    className="text-xs text-gray-800 sm:text-sm lg:text-base"
                    dangerouslySetInnerHTML={{
                        __html: poem.content,
                    }}
                ></p>
            </article>
        </div>
    );
}

export default Poem;
