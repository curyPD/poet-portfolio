import React, { useState, useEffect, useRef } from "react";

function Poem({ poem }) {
    const [poemHeight, setPoemHeight] = useState(0);
    const [parentHeight, setParentHeight] = useState(0);
    const [styles, setStyles] = useState({});
    const [sticky, setSticky] = useState(false);

    const articleRef = useRef(null);

    useEffect(() => {
        setSticky(false);
        let minHeight;
        if (poemHeight && parentHeight) {
            minHeight = parentHeight - poemHeight;
        }
        const { height: poemH } = articleRef.current.getBoundingClientRect();
        const { y } = articleRef.current.parentElement.getBoundingClientRect();
        const normalParentHeight =
            minHeight ||
            articleRef.current.parentElement.getBoundingClientRect().height;
        setPoemHeight(poemH);
        setParentHeight(normalParentHeight + poemH);
        setStyles({
            minHeight: `${normalParentHeight}px`,
        });
        if (poemH < window.innerHeight) {
            setSticky(true);
        }
        if (y >= 0) return;
        setStyles({
            minHeight: `${Math.abs(y) + poemH}px`,
        });
        if (poemH >= window.innerHeight) {
            articleRef.current.parentElement.scrollIntoView({
                behavior: "smooth",
            });
        }
    }, [poem]);

    return (
        <div className="flex-1" style={styles}>
            <article
                ref={articleRef}
                className={sticky ? "lg:sticky lg:top-4" : ""}
            >
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
