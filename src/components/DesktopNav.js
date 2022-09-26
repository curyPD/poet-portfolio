import React from "react";

function DesktopNav({ handleScrollRewards, handleScrollWork }) {
    return (
        <nav className="hidden lg:block">
            <ol className="flex items-center gap-11">
                <li className="group text-base font-normal">
                    <button
                        onClick={handleScrollRewards}
                        className="text-gray-600 transition-colors focus:text-orange-400 focus:outline-none group-hover:text-orange-400"
                    >
                        Дипломы
                    </button>
                </li>
                <li className="group text-base font-normal">
                    <button
                        onClick={handleScrollWork}
                        className="text-gray-600 transition-colors focus:text-orange-400 focus:outline-none group-hover:text-orange-400"
                    >
                        Произведения
                    </button>
                </li>
                <li className="group text-base font-normal">
                    <a
                        className="text-gray-600 transition-colors focus:text-orange-400 focus:outline-none group-hover:text-orange-400"
                        href="mailto: stas1365iv@gmail.com"
                    >
                        Написать
                    </a>
                </li>
            </ol>
        </nav>
    );
}

export default DesktopNav;
