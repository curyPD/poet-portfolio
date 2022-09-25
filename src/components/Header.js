import React from "react";
import logo from "../img/logo.png";

function Header({ handleScrollRewards, handleScrollWork }) {
    return (
        <header>
            <div className="mx-auto flex h-20 max-w-screen-2xl items-center justify-between px-10">
                <div>
                    <img
                        src={logo}
                        alt="Orange letters C and D"
                        className="h-16"
                    />
                </div>
                <nav>
                    <ol className="flex items-center gap-10">
                        <li className="group text-lg font-normal">
                            <button
                                onClick={handleScrollRewards}
                                className="text-gray-600 transition-colors group-hover:text-orange-400"
                            >
                                Дипломы
                            </button>
                        </li>
                        <li className="group text-lg font-normal">
                            <button
                                onClick={handleScrollWork}
                                className="text-gray-600 transition-colors group-hover:text-orange-400"
                            >
                                Произведения
                            </button>
                        </li>
                        <li className="group text-lg font-normal">
                            <a
                                className="text-gray-600 transition-colors group-hover:text-orange-400"
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
