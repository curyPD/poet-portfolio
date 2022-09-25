import React, { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

function Header({ handleScrollRewards, handleScrollWork }) {
    const [menuOpen, setMenuOpen] = useState(false);

    function openMenu() {
        setMenuOpen(true);
    }

    function closeMenu() {
        setMenuOpen(false);
    }

    return (
        <header className="relative">
            <div
                onClick={closeMenu}
                className={`absolute right-0 top-0 z-40 block transition-all ${
                    menuOpen
                        ? "pointer-events-auto visible opacity-100"
                        : "pointer-events-none invisible opacity-0"
                } h-screen w-screen touch-none bg-gray-900/60 backdrop-blur-sm lg:hidden`}
            ></div>

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
                <nav>
                    <ol className="flex flex-col gap-12">
                        <li className="group text-2xl font-medium">
                            <button
                                onClick={() => {
                                    closeMenu();
                                    handleScrollRewards();
                                }}
                                className="text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-200 group-hover:text-orange-400"
                            >
                                Дипломы
                            </button>
                        </li>
                        <li className="group text-2xl font-medium">
                            <button
                                onClick={() => {
                                    closeMenu();
                                    handleScrollWork();
                                }}
                                className="text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-200 group-hover:text-orange-400"
                            >
                                Произведения
                            </button>
                        </li>
                        <li className="group text-2xl font-medium">
                            <a
                                className="text-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-200 group-hover:text-orange-400"
                                href="mailto: stas1365iv@gmail.com"
                            >
                                Написать
                            </a>
                        </li>
                    </ol>
                </nav>
            </div>

            <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-end px-4 md:px-8 lg:px-12">
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
                <nav className="hidden lg:block">
                    <ol className="flex items-center gap-11">
                        <li className="group text-lg font-normal lg:text-lg xl:text-xl">
                            <button
                                onClick={handleScrollRewards}
                                className="text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-200 group-hover:text-orange-400"
                            >
                                Дипломы
                            </button>
                        </li>
                        <li className="group text-lg font-normal lg:text-lg xl:text-xl">
                            <button
                                onClick={handleScrollWork}
                                className="text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-200 group-hover:text-orange-400"
                            >
                                Произведения
                            </button>
                        </li>
                        <li className="group text-lg font-normal lg:text-lg xl:text-xl">
                            <a
                                className="text-gray-600 transition-colors focus:outline-none focus:ring-2 focus:ring-orange-200 group-hover:text-orange-400"
                                href="mailto: stas1365iv@gmail.com"
                            >
                                Написать
                            </a>
                        </li>
                    </ol>
                </nav>
            </div>
        </header>
    );
}

export default Header;
