import React from "react";
import './Header.scss'

const Header = () => {
  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <a href="#">
            <img src="./logo.png" alt="Logo" />
          </a>
          <div className="navbar_items">
            <li className="navbar_link">
              Продукция
              <div className="navbar_link-option">
                <p>Ламинатные тубы</p>
                <p>Экструзионные тубы</p>
                <p>Другая упаковка</p>
              </div>
            </li>
            <hr />
            <li className="navbar_link">
              Сертификаты
            </li>
            <hr />
            <li className="navbar_link">
              Наша команда
            </li>
            <hr />
            <li className="navbar_link">
              О нас
            </li>
            <hr />
            <li className="navbar_link">
              Новости
            </li>
            <hr />
            <li className="navbar_link">
              Вакансии
            </li>
            <hr />
            <li className="navbar_link">
              Контакты
            </li>
          </div>
          <div className="navbar_languages">
            <font>RU</font>
            <hr />
            <font>EN</font>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
