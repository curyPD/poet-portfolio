import React from "react";

import image from "../img/hero.jpg";

function Hero(props) {
    return (
        <section className="py-10 sm:py-16 md:py-20 xl:pb-24 xl:pt-20">
            <div className="container mx-auto flex flex-col items-center gap-8 px-6 sm:gap-14 md:px-12 lg:flex-row-reverse lg:px-6 xl:max-w-screen-xl xl:gap-24 xl:px-12">
                <div className="w-44 sm:w-auto sm:max-w-xs lg:w-2/5 lg:max-w-none">
                    <img src={image} alt="Фотография Станислава Дружинина" />
                </div>

                <div className="lg:-mt-10 lg:w-3/5">
                    <h1 className="mb-6 text-center text-3xl font-semibold text-gray-900 sm:mb-8 sm:text-4xl lg:text-left xl:mb-10 xl:text-5xl">
                        Станислав Дружинин
                    </h1>
                    <p className="xl-mb-16 mb-9 text-center text-sm text-gray-500 sm:mb-10 sm:text-base md:text-lg lg:mb-12 lg:w-11/12 lg:text-left xl:mb-14 xl:text-xl xl:leading-normal">
                        Поэт, финалист литературных премий &ldquo;
                        <a
                            href="https://premianasledie.ru/"
                            target="_blank"
                            rel="noreferrer"
                            className="transition-colors hover:text-orange-400 focus:text-orange-400 focus:outline-none"
                        >
                            Наследие
                        </a>
                        &rdquo; 2013 и &ldquo;
                        <a
                            href="https://eseninpremia.ru/"
                            target="_blank"
                            rel="noreferrer"
                            className="transition-colors hover:text-orange-400 focus:text-orange-400 focus:outline-none"
                        >
                            Русь моя
                        </a>
                        &rdquo; 2018. Стихи переведены на немецкий, венгерский,
                        болгарский и итальянский языки.
                    </p>

                    <div className="flex items-center justify-center gap-2 sm:gap-8 lg:justify-start xl:gap-10">
                        <button
                            onClick={props.handleScroll}
                            className="border-2 border-orange-400 bg-orange-400 py-2 px-1 text-xs font-medium text-white transition-all hover:border-gray-700 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-orange-200 sm:px-3 sm:text-base xl:px-4 xl:text-lg"
                        >
                            Все произведения
                        </button>

                        <a
                            href="mailto: stas1365iv@gmail.com"
                            className="hidden border-2 border-orange-400 bg-white py-2 px-1 text-xs font-medium text-orange-400 transition-all hover:bg-orange-400 hover:text-white focus:outline-none focus:ring-4 focus:ring-orange-200 sm:px-3 sm:text-base xl:px-4 xl:text-lg"
                        >
                            Написать сообщение
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
