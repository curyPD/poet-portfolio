import React from "react";

import image from "../img/hero.jpg";

function Hero(props) {
    return (
        <section className="py-10 sm:py-16 md:py-20 xl:py-24">
            <div className="container mx-auto flex flex-col items-center gap-8 px-6 sm:gap-14 md:px-12 lg:flex-row-reverse lg:px-6 xl:max-w-screen-xl xl:gap-24 xl:px-12">
                <div className="w-44 sm:w-auto sm:max-w-xs lg:w-2/5 lg:max-w-none">
                    <img src={image} alt="Фотография Станислава Дружинина" />
                </div>

                <div className="lg:w-3/5">
                    <h1 className="mb-6 text-center text-3xl font-semibold text-gray-900 sm:mb-8 sm:text-4xl lg:text-left xl:mb-12 xl:text-5xl">
                        Станислав Дружинин
                    </h1>
                    <p className="xl-mb-16 mb-8 text-center text-sm text-gray-500 sm:mb-10 sm:text-base md:text-lg lg:mb-12 lg:w-11/12 lg:text-left xl:mb-16 xl:text-xl xl:leading-normal">
                        Поэт, финалист литературных премий &ldquo;
                        <a
                            href="https://premianasledie.ru/"
                            target="_blank"
                            rel="noreferrer"
                            className="transition-colors hover:text-amber-500 focus:text-amber-500 focus:outline-none"
                        >
                            Наследие
                        </a>
                        &rdquo; 2013 и &ldquo;
                        <a
                            href="https://eseninpremia.ru/"
                            target="_blank"
                            rel="noreferrer"
                            className="transition-colors hover:text-amber-500 focus:text-amber-500 focus:outline-none"
                        >
                            Русь моя
                        </a>
                        &rdquo; 2018, автор сборников стихотворений, изданных на
                        пяти языках.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-2 sm:flex-row sm:gap-8 lg:justify-start xl:gap-10">
                        <button
                            onClick={props.handleScroll}
                            className="group relative block py-2 px-1 text-base font-medium focus:outline-none md:text-lg lg:px-3 xl:px-5 xl:py-3 xl:text-xl"
                        >
                            <span className="relative z-10 text-gray-700 transition-colors group-hover:text-white">
                                Все произведения
                            </span>
                            <span className="absolute bottom-1 left-1/2 z-0 h-0.5 w-full -translate-x-1/2 bg-amber-500 transition-all group-hover:bottom-0 group-hover:h-full group-hover:w-full group-focus:bottom-0 lg:w-11/12 xl:bottom-2"></span>
                        </button>

                        <a
                            href="mailto: stas1365iv@gmail.com"
                            className="group relative block py-2 px-1 text-base font-medium focus:outline-none md:text-lg lg:px-3 xl:py-3 xl:px-5 xl:text-xl"
                        >
                            <span className="relative z-10 text-gray-700 transition-colors group-hover:text-white">
                                Написать сообщение
                            </span>
                            <span className="absolute bottom-1 left-1/2 z-0 h-0.5 w-full -translate-x-1/2 bg-amber-500 transition-all group-hover:bottom-0 group-hover:h-full group-hover:w-full group-focus:bottom-0 lg:w-11/12 xl:bottom-2"></span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
