import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <a className="header__logo" href="#">
        <img className="header__img" src="/img/logo.svg" width="190" height="38" alt="Лига Банк"/>
        ЛИГА Банк
      </a>

      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            Услуги
          </li>
          <li className="header__nav-item">
            Рассчитать кредит
          </li>
          <li className="header__nav-item header__nav-item--current">
            Конвертер валют
          </li>
          <li className="header__nav-item">
            Контакты
          </li>
          <li className="header__nav-item">
            Задать вопрос
          </li>
        </ul>
      </nav>

      <a className="header__login" href="#">Войти в Интернет-банк</a>
    </header>
  );
};

Header.displayName = `Header`;

export default Header;
