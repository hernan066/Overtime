import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu } from "../menu/Menu";
import { useDispatch, useSelector } from "react-redux";
import { openCart, openSearch } from "../../../redux/uiSlice";
import { useRouter } from "next/router";
import { RootState } from "../../../redux/store";

export const Navbar = () => {
  const [hamburgerIcon, setHamburgerIcon] = useState<Boolean>(false);
  const [hideNavbar, setHideNavbar] = useState<Boolean>(false);
  const [searchTerm, setSearchTerm] = useState("");

  const { numberOfItems } = useSelector((state: RootState) => state.cart);
  const { user, isLoggedIn } = useSelector((state: RootState) => state.user);

  

  const dispactch = useDispatch();
  const router = useRouter();

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

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return;

    router.push(`/search/${searchTerm}`);
  };

  const letter = user?.name?.split(" ")[0]?.charAt(0);

  

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
                    layout="responsive"
                    objectFit="fill"
                  />
                </span>
              </a>
            </Link>
          </div>

          <div className="header__icons">
            <ul className="f jce aic">
              <li className="header__icons__search">
                <div className="header__icons__search-form">
                  <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={(e) =>
                      e.key === "Enter" ? onSearchTerm() : null
                    }
                  />
                  <button className="search-btn" onClick={() => onSearchTerm()}>
                    <Image
                      src={"/icons/search.svg"}
                      alt="bag"
                      width={20}
                      height={20}
                    />
                  </button>
                </div>
              </li>
              <li
                className="header__icons__search-movil"
                onClick={() => dispactch(openSearch())}
              >
                <div className="header__icons-img">
                  <Image
                    src={"/icons/search.svg"}
                    alt="bag"
                    width={36}
                    height={36}
                    layout="responsive"
                    objectFit="cover"
                  />
                </div>
              </li>
              {isLoggedIn ? (
                <li className="header__icons__account">
                  <Link href={"/user/profile"} passHref>
                    <a>
                      <div className="header__icons-user-log">{letter}</div>
                    </a>
                  </Link>
                </li>
              ) : (
                <li className="header__icons__account">
                  <Link href={`/auth/login?p=${ router.asPath}`} passHref>
                    <a>
                      <div className="header__icons-img">
                        <Image
                          src={"/icons/account.svg"}
                          alt="bag"
                          width={36}
                          height={36}
                          layout="responsive"
                          objectFit="cover"
                        />
                      </div>
                    </a>
                  </Link>
                </li>
              )}

              <li
                className="header__icon__item--cart"
                onClick={() => dispactch(openCart())}
                style={{ cursor: "pointer" }}
              >
                <div className="header__icons-img">
                  <Image
                    src={"/icons/bag.svg"}
                    alt="bag"
                    width={36}
                    height={36}
                    layout="responsive"
                    objectFit="cover"
                  />

                  {numberOfItems > 0 && (
                    <span className="header-cart-icon__count p2">
                      {numberOfItems}
                    </span>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>
        <AnimatePresence>{hamburgerIcon && <Menu />}</AnimatePresence>
      </div>
    </nav>
  );
};
