import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "../menu/Menu";

export const Navbar = () => {
  const [hamburgerIcon, setHamburgerIcon] = useState<Boolean>(false);
  const [hideNavbar, setHideNavbar] = useState(false);

  useEffect(() => {
    function fixNav() {
      if (window.scrollY > 70 + 150) {
        setHideNavbar(true);
      } else {
        setHideNavbar(false);
      }
    }

    window.addEventListener("scroll", fixNav);
  }, []);

  return (
    <nav className={`nav ${hideNavbar ? "hidden" : ""}`}>
      <div className={`header__inner `}>
        <div className="header__container">
          <div className="header__nav">
            <div
              className={`hamburger ${hamburgerIcon ? "is-active" : ""}`}
              id="hamburger-1"
              onClick={() => setHamburgerIcon(!hamburgerIcon)}
            >
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
          </div>

          <div className="header__logo">
            <Link href={"/"} passHref>
              <a>
                <span className="header__logo__icon">
                  <Image
                    src={"/icons/logo.svg"}
                    alt="bag"
                    width={187}
                    height={30}
                  />
                </span>
              </a>
            </Link>
          </div>

          <div className="header__icons">
            <ul className="f jce aic">
              <li className="header__icons__search">
                <div className="header__icons__search-form">
                  <input type="text" placeholder="Search" />
                  <button className="search-btn">
                    <Image
                      src={"/icons/search.svg"}
                      alt="bag"
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
              </li>
              <li className="header__icons__account">
                <Link href={"/auth/login"} passHref>
                  <a>
                    <Image
                      src={"/icons/account.svg"}
                      alt="bag"
                      width={36}
                      height={36}
                    />
                  </a>
                </Link>
              </li>
              <li className="header__icon__item--cart">
                <Link href={"/"} passHref>
                  <Image
                    src={"/icons/bag.svg"}
                    alt="bag"
                    width={36}
                    height={36}
                  />
                </Link>
                <span className="header-cart-icon__count p2">2</span>
              </li>
            </ul>
          </div>
        </div>
        <AnimatePresence>{hamburgerIcon && <Menu />}</AnimatePresence>
      </div>
    </nav>
  );
};
