import React from 'react';

const Converter = () => {
  return (
    <section className="converter">
      <h2 className="converter__header">Конвертер валют</h2>
      <form method="post" action="#" className="converter__form">
        <div className="converter__field">
          <label htmlFor="currency-input">
            <h3 className="converter__field-title">У меня есть</h3>
          </label>
          <input
            id="currency-input"
            className="converter__input"
            name="before"
            type="number"
            min="0"
            step="1"
            placeholder="1000"
          />

          <label>
            <select name="currencyInput" value="RUB" className="converter__select">
              <option value="RUB">RUB</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="CNY">CNY</option>
            </select>
            <span className="visually-hidden">валюта</span>
          </label>
        </div>

        <div className="converter__field">
          <label htmlFor="currency-output">
            <h3 className="converter__field-title">Хочу приобрести</h3>
          </label>
          <input
            id="currency-output"
            className="converter__input"
            name="currencyOutput"
            type="number"
            min="0"
            step="1"
            placeholder="13,1234"
          />

          <label>
            <select name="currencyOutput" value="USD" className="converter__select">
              <option value="RUB">RUB</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="GBP">GBP</option>
              <option value="CNY">CNY</option>
            </select>
            <span className="visually-hidden">валюта</span>
          </label>
        </div>

        <div id="calendar">
          <button className="converter__calendar" type="button">
            1.12.2020
          </button>
        </div>

        <button type="submit" className="converter__button">Сохранить результат</button>
      </form>
    </section>
  );
};

Converter.displayName = `Converter`;

export default Converter;
