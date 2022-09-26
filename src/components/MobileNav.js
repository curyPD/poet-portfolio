import React from "react";

function MobileNav({ closeMenu, handleScrollRewards, handleScrollWork }) {
    return (
        <nav>
            <ol className="flex flex-col gap-10">
                <li className="group text-2xl font-medium">
                    <button
                        onClick={() => {
                            closeMenu();
                            handleScrollRewards();
                        }}
                        className="text-gray-700 transition-colors focus:text-orange-400 focus:outline-none group-hover:text-orange-400"
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
                        className="text-gray-700 transition-colors focus:text-orange-400 focus:outline-none group-hover:text-orange-400"
                    >
                        Произведения
                    </button>
                </li>
                <li className="group text-2xl font-medium">
                    <a
                        className="text-gray-700 transition-colors focus:text-orange-400 focus:outline-none group-hover:text-orange-400"
                        href="mailto: stas1365iv@gmail.com"
                    >
                        Написать
                    </a>
                </li>
            </ol>
        </nav>
    );
}

export default MobileNav;
