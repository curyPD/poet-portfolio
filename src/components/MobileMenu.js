import React from "react";
import MobileNav from "./MobileNav";
import Overlay from "./Overlay";
import { HiOutlineX } from "react-icons/hi";

function MobileMenu({
    menuOpen,
    closeMenu,
    handleScrollRewards,
    handleScrollWork,
}) {
    return (
        <>
            <Overlay menuOpen={menuOpen} closeMenu={closeMenu} />
            <div
                className={`absolute right-0 top-0 z-50 block h-screen w-64 transition-all ${
                    menuOpen
                        ? "pointer-events-auto translate-x-0"
                        : "pointer-events-none translate-x-full"
                } touch-none bg-white py-3 pr-4 pl-6 md:w-80 md:pr-8 lg:hidden`}
            >
                <div className="mb-10 flex justify-end">
                    <button
                        onClick={closeMenu}
                        className="flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-4 focus:ring-orange-200"
                    >
                        <HiOutlineX className="text-3xl text-orange-400" />
                    </button>
                </div>

                <MobileNav
                    closeMenu={closeMenu}
                    handleScrollRewards={handleScrollRewards}
                    handleScrollWork={handleScrollWork}
                />
            </div>
        </>
    );
}

export default MobileMenu;
