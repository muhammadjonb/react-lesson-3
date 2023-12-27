import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="footer">
          <div className="footer_top">
            <img src="logo.png" alt="Logo" />
            <div className="footer_top-icons">
              <a href="https://vk.com/">
                <ion-icon name="logo-vk"></ion-icon>
              </a>
              <a href="https://www.facebook.com/">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a href="https://www.linkedin.com/">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </div>
          </div>
          <div className="footer_center">
            <div className="footer_center-itmes">
              <h3>Продукция</h3>
              <ul>
                <li>Ламинатные тубы</li>
                <li>Экструзионные тубы</li>
                <li>Другая упаковка</li>
              </ul>
            </div>
            <div className="footer_center-itmes">
              <h3>Компания</h3>
              <ul>
                <li>О нас</li>
                <li>Наша команда</li>
                <li>Сертификаты</li>
              </ul>
            </div>
            <div className="footer_center-itmes">
              <h3>Разделы</h3>
              <ul>
                <li>Контакты</li>
                <li>Новости</li>
                <li>Вакансии</li>
              </ul>
            </div>
            <div className="footer_center-itmes">
              <h4>Беларусь</h4>
              <ul>
                <li>+375 (17) 270 53 77</li>
                <li>+375 (17) 270 53 78</li>
              </ul>
              <h4>Москва</h4>
              <ul>
                <li>+7 (495) 280 73 44</li>
                <li>+7 (495) 280 73 44</li>
              </ul>
            </div>
            <div className="footer_center-itmes">
              <h4>Европа</h4>
              <ul>
                <li>+48 73 1111 044</li>
              </ul>
              <h4>Екатеринбург</h4>
              <ul>
                <li>+7 (343) 346 82 06</li>
              </ul>
            </div>
          </div>
          <div className="footer_bottom">
            <p>© 2022 Leangroup. All Rights Reserved.</p>
            <p>Разработка и продвижение сайтов SkyWeb.by</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;