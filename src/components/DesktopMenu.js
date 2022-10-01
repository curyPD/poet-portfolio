import React from "react";
import DesktopNav from "./DesktopNav";
import { HiOutlineMenu } from "react-icons/hi";

function DesktopMenu({
    menuOpen,
    openMenu,
    handleScrollRewards,
    handleScrollWork,
}) {
    return (
        <div className="mx-auto flex h-16 max-w-screen-lg items-center justify-end px-4 md:px-8 lg:justify-start lg:px-6 xl:max-w-screen-xl xl:px-12">
            {!menuOpen && (
                <div className="block lg:hidden">
                    <button
                        onClick={openMenu}
                        className="flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-4 focus:ring-orange-200"
                    >
                        <HiOutlineMenu className="text-3xl text-orange-400" />
                    </button>
                </div>
            )}
            <DesktopNav
                handleScrollRewards={handleScrollRewards}
                handleScrollWork={handleScrollWork}
            />
        </div>
    );
}

export default DesktopMenu;
