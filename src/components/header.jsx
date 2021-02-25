import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <a className="header__logo" href="#">ЛИГА Банк</a>

        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a className="header__nav-link" href="#">Услуги</a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="#">Рассчитать кредит</a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link header__nav-link--current" href="#">Конвертер валют</a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="#">Контакты</a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="#">Задать вопрос</a>
            </li>
          </ul>
        </nav>

        <a className="header__login" href="#">Войти в Интернет-банк</a>
      </div>
    </header>
  );
};

Header.displayName = `Header`;

export default Header;
