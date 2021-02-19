import React from 'react';
import Converter from "./converter";

const Main = () => {
    return (
        <main>
            <section className="promo">
                <h1 className="promo__header">Лига Банк</h1>
                <p className="promo__slogan">Кредиты на любой случай</p>
                <a className="promo__link" href="#">Рассчитать кредит</a>
            </section>
            <Converter/>
        </main>
    );
};

Main.displayName = `Main`;

export default Main;
