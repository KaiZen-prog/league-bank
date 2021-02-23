import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__company-info">
          <a className="footer__logo" href="#">ЛИГА Банк</a>
          <p className="footer__address">150015, г. Москва, ул. Московская, д. 32</p>
          <p className="footer__address">Генеральная лицензия Банка России №1050</p>
          <p className="footer__address">Ⓒ Лига Банк, 2019</p>
        </div>

        <nav className="footer__nav">
          <ul className="footer__nav-list">
            <li className="footer__nav-item">Услуги</li>
            <li className="footer__nav-item">Рассчитать кредит</li>
            <li className="footer__nav-item">Контакты</li>
            <li className="footer__nav-item">Задать вопрос</li>
          </ul>
        </nav>

        <div className="footer__phone-wrapper">
          <a className="footer__phone footer__phone--mobile" href="tel:*0904">*0904</a>
          <p className="footer__phone-info">Бесплатно для абонентов МТС, Билайн, Мегафон, Теле2</p>
        </div>

        <div className="footer__phone-wrapper">
          <a className="footer__phone footer__phone--stationary" href="tel:88001112233">8 800 111 22 33</a>
          <p className="footer__phone-info">Бесплатный для всех городов России</p>
        </div>

        <ul className="footer__socials-list">
          <li className="footer__socials-item">
            <a className="footer__socials-link footer__socials-link--fb" href="#">
              <span className="visually-hidden">Наш фейсбук</span>
            </a>
          </li>
          <li className="footer__socials-item">
            <a className="footer__socials-link footer__socials-link--inst" href="#">
              <span className="visually-hidden">Наш инстаграм</span>
            </a>
          </li>
          <li className="footer__socials-item">
            <a className="footer__socials-link footer__socials-link--twitter" href="#">
              <span className="visually-hidden">Наш твиттер</span>
            </a>
          </li>
          <li className="footer__socials-item">
            <a className="footer__socials-link footer__socials-link--youtube" href="#">
              <span className="visually-hidden">Наш канал на ютубе</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

Footer.displayName = `Footer`;

export default Footer;
