import React, { useState, useEffect, useRef } from "react";
/*
    ACTION PLAN v2
    What I want to achieve:
    If at the moment a poem is loaded, its top boundary is in the view, don't do anything.
    Let it stay there, it's up to user to scroll wherever they want. If, however, the top of
    the poem is not visible, I want to expand the container by the height of the poem, make poem
    relative-positioned and its y-coordinate should be the module of y-coordinate of its parent
    container, which we'll get from its boundingClientRect. Then, if user scrolls down, we don't
    do anything. The user should be able to easily scroll to the bottom of the poem without
    it sticking to the viewport. However, if we scroll up, the moment the top of the poem hits
    the top of the viewport, make it fixed/sticky until it reaches the top of the
    parent container. Then unstick it and do no more till the end of its lifecycle.

    Poem loads, its top is invisible:
    1) Get height of the poem, set poemHeight state to it. Get height of the parent, set parentHeight state to it+poemHeight;
    2) Set the parentEl height to state value;
    Before the other steps:
    When another poem loads, first set parent height to its prev value - poemHeight state value;
    3) 
*/
function Poem({ poem }) {
    const articleRef = useRef(null);

    // useEffect(() => {
    //     // function controlHeight() {
    //     //     const parentHeight = articleRef.current.parentElement.getBoundingClientRect().height;
    //     //     const poemHeight = articleRef.current.getBoundingClientRect().height;
    //     //     setParentHeight(parentHeight + poemHeight);
    //     // }
    //     const rect = articleRef.current.getBoundingClientRect();
    //     const { y, height: poemHeight } = rect;
    //     if (y >= 0) return;
    //     console.log(rect);
    //     const parentHeight =
    //         articleRef.current.parentElement.getBoundingClientRect().height;
    //     const newParentHeight = parentHeight + poemHeight;
    //     console.log(newParentHeight);
    // }, [poem]);

    return (
        <div className="flex-1">
            <article ref={articleRef}>
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
