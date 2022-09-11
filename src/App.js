import React from "react";

import image from "./img/hero.jpg";

export default function App() {
    return (
        <main>
            <section className="py-10">
                <div className="px-6 mx-auto max-w-sm">
                    <h1 className="font-medium text-2xl mb-6 text-gray-900">
                        Станислав Дружинин
                    </h1>
                    <p className="text-base text-gray-500 mb-12 leading-snug">
                        Поэт, финалист и дипломант литературных премий, автор
                        сборников стихотворений, изданных на пяти языках
                    </p>
                    <img
                        src={image}
                        alt="Фотография Станислава Дружинина"
                        className="max-w-xs"
                    />
                    <button>Все произведения</button>
                    <button>Написать сообщение</button>
                </div>
            </section>

            <section></section>
        </main>
    );
}
