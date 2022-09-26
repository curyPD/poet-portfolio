import React from "react";

function Overlay({ closeMenu, menuOpen }) {
    return (
        <div
            onClick={closeMenu}
            className={`absolute right-0 top-0 z-40 block transition-all ${
                menuOpen
                    ? "pointer-events-auto visible opacity-100"
                    : "pointer-events-none invisible opacity-0"
            } h-screen w-screen touch-none bg-gray-900/60 backdrop-blur-sm lg:hidden`}
        ></div>
    );
}

export default Overlay;
