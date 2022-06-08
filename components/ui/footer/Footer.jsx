import { Logo } from "./Logo";

export const Footer = () => {
  return (
    <footer className="footer__container">
      <div className="footer__bar">
        <div className="footer__marquee_text">
          <div className="footer__marquee_text_wrapper">
            <div className="footer__marquee_text_content">
              <div className="footer__marquee_text_text">
                <Logo />
              </div>
              <div className="footer__marquee_text_text">
                <Logo />
              </div>
              <div className="footer__marquee_text_text">
                <Logo />
              </div>
              <div className="footer__marquee_text_text">
                <Logo />
              </div>
              <div className="footer__marquee_text_text">
                <Logo />
              </div>
              <div className="footer__marquee_text_text">
                <Logo />
              </div>
              <div className="footer__marquee_text_text">
                <Logo />
              </div>
              <div className="footer__marquee_text_text">
                <Logo />
              </div>
              <div className="footer__marquee_text_text">
                <Logo />
              </div>
              <div className="footer__marquee_text_text">
                <Logo />
              </div>
              <div className="footer__marquee_text_text">
                <Logo />
              </div>
              <div className="footer__marquee_text_text">
                <Logo />
              </div>
              <div className="footer__marquee_text_text">
                <Logo />
              </div>
              <div className="footer__marquee_text_text">
                <Logo />
              </div>
              <div className="footer__marquee_text_text">
                <Logo />
              </div>
              <div className="footer__marquee_text_text">
                <Logo />
              </div>
              <div className="footer__marquee_text_text">
                <Logo />
              </div>
              <div className="footer__marquee_text_text">
                <Logo />
              </div>
              <div className="footer__marquee_text_text">
                <Logo />
              </div>
              <div className="footer__marquee_text_text">
                <Logo />
              </div>
              <div className="footer__marquee_text_text">
                <Logo />
              </div>
              <div className="footer__marquee_text_text">
                <Logo />
              </div>
              <div className="footer__marquee_text_text">
                <Logo />
              </div>
              <div className="footer__marquee_text_text">
                <Logo />
              </div>
              <div className="footer__marquee_text_text">
                <Logo />
              </div>
              <div className="footer__marquee_text_text">
                <Logo />
              </div>
              <div className="footer__marquee_text_text">
                <Logo />
              </div>
              <div className="footer__marquee_text_text">
                <Logo />
              </div>
              <div className="footer__marquee_text_text">
                <Logo />
              </div>
              <div className="footer__marquee_text_text">
                <Logo />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer__main">
        <div className="footer__top_title">
          <h2 className="footer__top_title_text">JOIN OT FAN</h2>
        </div>
        <div className="footer__body">
          <div className="footer__newsletter">
            <div className="footer__newsletter__header">
              <p className="footer__newsletter__description">
                Enter your phone number so I can text you about secret stuff
                when you sign up for texts
              </p>
              <p className="footer__newsletter__compliance">
                By submitting this form, you agree to receive recurring
                automated promotional and personalized marketing text messages
                (e.g. cart reminders) from Overtime at the cell number used when
                signing up. Consent is not a condition of any purchase. Reply
                HELP for help and STOP to cancel. Msg frequency varies. Msg
                &amp; data rates may apply.
              </p>
              <p className="footer__newsletter__compliance">
                View{" "}
                <a href="#" target="_blank" rel="noreferrer">
                  Terms
                </a>{" "}
                &amp;{" "}
                <a href="#" target="_blank" rel="noreferrer">
                  Privacy
                </a>
              </p>
            </div>
            <div className="footer__newsletter__body">
              <div className="footer__attentive-signup ">
                <form>
                  <div className="footer__attentive-signup__input">
                    <div className="text-input__wrapper">
                      <input
                        name="phone"
                        placeholder="Enter Phone Number"
                        type="number"
                        className="footer__text-input__el"
                      />
                    </div>

                    <button className="attentive-signup__btn">{">"}</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="footer__menu">
            <div className="footer__menu_inner">
              <ul className="footer__menu__items">
                <li className="footer__menu__item">
                  <a href="#" className="footer__menu__item__link">
                    HELP CENTER
                  </a>
                </li>
                <li className="footer__menu__item">
                  <a href="#" className="footer__menu__item__link">
                  RETURNS AND EXCHANGES
                  </a>
                </li>
                <li className="footer__menu__item">
                  <a href="#" className="footer__menu__item__link">
                  EDIT OR CANCEL ORDER
                  </a>
                </li>
                <li className="footer__menu__item">
                  <a href="#" className="footer__menu__item__link">
                  LOOKBOOK
                  </a>
                </li>
                <li className="footer__menu__item">
                  <a href="#" className="footer__menu__item__link">
                  ACCOUNT
                  </a>
                </li>
                <li className="footer__menu__item">
                  <a href="#" className="footer__menu__item__link">
                  OVERTIME TV
                  </a>
                </li>
                <li className="footer__menu__item">
                  <a href="#" className="footer__menu__item__link">
                  DOWNLOAD THE APP
                  </a>
                </li>
                <li className="footer__menu__item">
                  <a href="#" className="footer__menu__item__link">
                  ABOUT
                  </a>
                </li>
                <li className="footer__menu__item">
                  <a href="#" className="footer__menu__item__link">
                  CONTACT US
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__social_container"></div>
        </div>
      </div>
    </footer>
  );
};
