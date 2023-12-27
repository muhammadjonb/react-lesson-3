import React from "react";
import "./Hero.scss";
import video from "../../assets/images/video.png";
import { img1, img2, img3, img4, img5, img11, img22, img33, img44, img55, person, person1, person2, person3, person4, new1, new2, new3 } from "../../assets";

const Hero = () => {
  return (
    <>
      <section className="hero_bg">
        <div className="container">
          <div className="hero">
            <span>LEANGROUP - тубы и этикетки</span>
            <h1>Ламинатные тубы</h1>
            <p>
              Используются для производства зубных паст. Широко применяются в
              сегменте косметики, пищевой индустрии, парафармацевтике, бытовой
              химии и DIY (Do-it-Yourself).
            </p>
            <button className="btn">Каталог</button>
          </div>
        </div>
      </section>
      <section className="about-section">
        <div className="container">
          <div className="about">
            <h2>
              О компании <span>LEANGROUP</span>
            </h2>
            <div className="about_center">
              <div className="about_center-video">
                <img src={video} alt="video" />
              </div>
              <div className="about_center-text">
                <p>
                  Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году
                  и на сегодняшний день является ведущей компанией по
                  производству ламинатных и экструзионных туб.
                </p>
                <p>
                  Имея две технологии – для производства ламинатных и
                  экструзионных туб, мы предлагаем вам широкий спектр
                  возможностей. Большим преимуществом является собственный
                  печатный цех в ламинате и in-line печать в экструзии с
                  возможностью различных дополнительных опций декора. Особое
                  внимание уделяется работе с поставщиками для контроля и
                  поддержания качества производимой нами продукции.
                </p>
                <p>
                  С января 2018 года компания стала членом Европейской
                  Ассоциации производителей туб (ETMA), что подтверждает сильную
                  позицию бренда и на рынке Европы.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section_three">
        <div className="container">
          <div className="certificat">
            <h2>
              Качество продукции подтверждают <span>сертификаты</span>
            </h2>
            <div className="certificat_s">
              <img src={img1} alt="certificat" />
              <img src={img2} alt="certificat" />
              <img src={img3} alt="certificat" />
              <img src={img4} alt="certificat" />
              <img src={img5} alt="certificat" />
            </div>
          </div>
        </div>
      </section>
      <section className="section-four">
        <div className="container">
          <div className="product">
            <h2>
              Наша <span>продукция</span>
            </h2>
            <div className="product_btn">
              <button>Ламинатные тубы</button>
              <button>Экструзионные тубы</button>
              <button>Другая упаковка</button>
            </div>
            <div className="product_imgs">
              <img src={img11} alt="product" />
              <img src={img22} alt="product" />
              <img src={img33} alt="product" />
              <img src={img44} alt="product" />
              <img src={img55} alt="product" />
            </div>
            <button className="btn">Перейти в каталог</button>
          </div>
        </div>
      </section>
      <section className="section-five">
        <div className="container">
          <div className="comanda">
            <h2>
              Наша <span>команда</span>
            </h2>
            <div className="comanda_cards">
              <div className="comanda_card">
                <img src={person} alt="person" />
                <h4>Войнич Дарья</h4>
                <h5>Заместитель директора по продажам</h5>
                <p>+375 (17) 270-53-77 (317)</p>
              </div>
              <div className="comanda_card">
                <img src={person1} alt="person" />
                <h4>Мисько Екатерина</h4>
                <h5>Начальник отдела сопровождения</h5>
                <p>+375 (17) 270-53-77 (115)</p>
                <p> +375 29 112-73-48</p>
                <p>k.melnichenko@leangroup.by</p>
              </div>
              <div className="comanda_card">
                <img src={person2} alt="person" />
                <h4>Дмитроченко Дмитрий</h4>
                <h5>Начальник отдела допечатной подготовки</h5>
                <p>+375 (17) 270-53-77 (333)</p>
                <p> +375 29 360-32-26</p>
                <p>dmitrochenko@leangroup.by</p>
              </div>
              <div className="comanda_card">
                <img src={person3} alt="person" />
                <h4>Антух Евгений</h4>
                <h5>Начальник отдела снабжения</h5>
                <p>+375 (17) 270-53-77 (148)</p>
                <p>+375 44 764-16-28</p>
                <p>j.antuh@leangroup.by</p>
              </div>
              <div className="comanda_card">
                <img src={person4} alt="person" />
                <h4>Мисник Елена</h4>
                <h5>Специалист по работе с клиентами</h5>
                <p>+375 (17) 270-53-77 (322)</p>
                <p> +375 29 329-34-03</p>
                <p>e.misnik@leangroup.by</p>
              </div>
            </div>
            <button className="btn">Наша команда</button>
          </div>
        </div>
      </section>
      <section className="section-sex">
        <div className="container">
          <div className="news">
            <h2>Новости</h2>
            <div className="new_cards">
              <div className="new_card">
                <img src={new1} alt="new image" />
                <span>28.01.2022</span>
                <p>"ЛеанГрупп" серебряный призер EcoVadis!</p>
              </div>
              <div className="new_card">
                <img src={new2} alt="new image" />
                <span>21.01.2022</span>
                <p>"ЛеанГрупп" серебряный призер EcoVadis!</p>
              </div>
              <div className="new_card">
                <img src={new3} alt="new image" />
                <span>16.12.2021</span>
                <p>Туба, как вид упаковки</p>
              </div>
            </div>
            <button className="btn">Все новости</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
