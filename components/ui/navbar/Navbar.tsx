import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="header__inner">
      <div className="header__container">
        <div className="header__nav">icono de hamburguesa</div>

        <div className="header__logo">
          <Link href={"/"} passHref>
            <span className="header__logo__icon">
              <Image
                src={"/icons/logo.svg"}
                alt="bag"
                width={187}
                height={30}
              />
            </span>
          </Link>
        </div>

        <div className="header__icons">
          <ul className="f jce aic">
            <li className="header__icons__search">
              <div className="header__icons__search-form">
                <input type="text" placeholder="Search"/>
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
              <Link href={"/"} passHref>
                <Image
                  src={"/icons/account.svg"}
                  alt="bag"
                  width={36}
                  height={36}
                />
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
    </div>
  );
};
