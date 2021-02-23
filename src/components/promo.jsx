import React from 'react';

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__center">
        <div className="promo__wrapper">
          <h1 className="promo__header">Лига Банк</h1>
          <p className="promo__slogan">Кредиты на любой случай</p>
          <a className="promo__link" href="#">Рассчитать кредит</a>
        </div>
      </div>
    </section>
  );
};

Promo.displayName = `Promo`;

export default Promo;
