import React from 'react';

const Converter = () => {
  return (
    <section className="converter">
      <h2 className="promo__header">Конвертер валют</h2>
      <form method="post" action="#" className="converter__form">
        <div className="converter__field">
          <label htmlFor="converter__input">
            <h3 className="converter__field-title">У меня есть</h3>
          </label>
          <input id="converter__input" className="converter__input" type="number" name="currencyInput" placeholder="0"/>

          <label className="converter__select-wrapper">
            <span></span>
            <select name="currencyInput" value="RUB" className="converter__select">
              <option value="RUB">RUB</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="CNY">CNY</option>
            </select>
          </label>
        </div>

        <div className="converter__field">
          <label htmlFor="converter__input">
            <h3 className="converter__field-title">Хочу приобрести</h3>
          </label>
          <input id="converter__input" className="converter__input" type="number" name="currencyOutput" placeholder="0"/>

          <label className="converter__select-wrapper">
            <span></span>
            <select name="currencyOutput" value="USD" className="currency-converter__select">
              <option value="RUB">RUB</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="CNY">CNY</option>
            </select>
          </label>
        </div>

        <div id="calendar">Здесь будет календарь</div>

        <button type="submit" className="converter__button">Сохранить результат</button>
      </form>
    </section>
  );
};

Converter.displayName = `Converter`;

export default Converter;
