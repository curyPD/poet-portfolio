import React from "react";
import { HiOutlineChevronLeft } from "react-icons/hi";
import { HiOutlineChevronRight } from "react-icons/hi";

import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/css/core";

import diploma1 from "../img/rewards/diploma-1.jpg";
import diploma2 from "../img/rewards/diploma-2.jpg";
import diploma3 from "../img/rewards/diploma-3.jpg";
import diploma4 from "../img/rewards/diploma-4.jpg";
import diploma5 from "../img/rewards/diploma-5.jpg";
import diploma6 from "../img/rewards/diploma-6.jpg";
import diploma7 from "../img/rewards/diploma-7.jpg";
import diploma8 from "../img/rewards/diploma-8.jpg";
import diploma9 from "../img/rewards/diploma-9.jpg";
import diploma10 from "../img/rewards/diploma-10.jpg";
import diploma11 from "../img/rewards/diploma-11.jpg";
import diploma12 from "../img/rewards/diploma-12.jpg";

function Rewards() {
    return (
        <section className="py-10 sm:py-16 md:py-20 xl:py-24">
            <h2 className="mb-10 text-center text-2xl font-semibold text-gray-900 sm:text-3xl xl:mb-16 xl:text-4xl">
                Дипломы
            </h2>
            <div className="relative mx-auto w-2/3 max-w-xs lg:w-full lg:max-w-sm xl:max-w-md">
                <Splide
                    hasTrack={false}
                    options={{
                        perPage: 1,
                        rewind: true,
                        gap: "3rem",
                    }}
                >
                    <div className="xl:mx-auto xl:w-5/6">
                        <SplideTrack>
                            <SplideSlide className="flex items-center">
                                <img src={diploma1} alt="" />
                            </SplideSlide>
                            <SplideSlide className="flex items-center">
                                <img src={diploma2} alt="" />
                            </SplideSlide>
                            <SplideSlide className="flex items-center">
                                <img src={diploma3} alt="" />
                            </SplideSlide>
                            <SplideSlide className="flex items-center">
                                <img src={diploma4} alt="" />
                            </SplideSlide>
                            <SplideSlide className="flex items-center">
                                <img src={diploma5} alt="" />
                            </SplideSlide>
                            <SplideSlide className="flex items-center">
                                <img src={diploma6} alt="" />
                            </SplideSlide>
                            <SplideSlide className="flex items-center">
                                <img src={diploma7} alt="" />
                            </SplideSlide>
                            <SplideSlide className="flex items-center">
                                <img src={diploma8} alt="" />
                            </SplideSlide>
                            <SplideSlide className="flex items-center">
                                <img src={diploma9} alt="" />
                            </SplideSlide>
                            <SplideSlide className="flex items-center">
                                <img src={diploma10} alt="" />
                            </SplideSlide>
                            <SplideSlide className="flex items-center">
                                <img src={diploma11} alt="" />
                            </SplideSlide>
                            <SplideSlide className="flex items-center">
                                <img src={diploma12} alt="" />
                            </SplideSlide>
                        </SplideTrack>
                        <div className="splide__arrows">
                            <button className="splide__arrow splide__arrow--prev group absolute top-1/2 left-0 flex -translate-x-10 -translate-y-1/2 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-orange-200 lg:-translate-x-16 xl:-translate-x-20">
                                <HiOutlineChevronLeft className="text-3xl text-orange-400 transition-all group-hover:text-orange-500 lg:text-4xl xl:text-5xl" />
                            </button>
                            <button className="splide__arrow splide__arrow--next group absolute top-1/2 right-0 flex translate-x-10 -translate-y-1/2 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-orange-200 lg:translate-x-16 xl:translate-x-20">
                                <HiOutlineChevronRight className="text-3xl text-orange-400 transition-all group-hover:text-orange-500 lg:text-4xl xl:text-5xl" />
                            </button>
                        </div>
                    </div>
                </Splide>
            </div>
        </section>
    );
}

export default Rewards;
