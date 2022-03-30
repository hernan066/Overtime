import Image from "next/image";
import Link from "next/link";

export const Menu = () => {
  return (
    <div className="header-nav__inner">
      <ul className="header-nav__items">
        <li className="header-nav__item">
          <a href={"/ajkhfjksd"}>
            <figure className="header-nav__item__icon">
              <div className="header-nav__item__icon__img1">
                <Image
                  src={"/icons/menu/DAISY_120x.png"}
                  alt="bag"
                  width={120}
                  height={120}
                />
              </div>
              <div className="header-nav__item__icon__img2">
                <Image
                  src={"/icons/menu/DAISY_ROLLOVER_120x.png"}
                  alt="bag"
                  width={120}
                  height={120}
                  
                />
              </div>
            </figure>
            <span className="header-nav__item__text">Hooping is Paradise</span>
          </a>
        </li>
        <li className="header-nav__item">
          <a href={"/1"}>
            <figure className="header-nav__item__icon">
              <Image
                src={"/icons/menu/Hoodies_120x.png"}
                alt="bag"
                width={120}
                height={120}
                className="header-nav__item__icon__img1"
              />
              <Image
                src={"/icons/menu/Hoodies_Rollover_120x.png"}
                alt="bag"
                width={120}
                height={120}
                className="header-nav__item__icon__img2"
              />
            </figure>
            <span className="header-nav__item__text">Hooping is Paradise</span>
          </a>
        </li>
        <li className="header-nav__item">
          <a href={"/2"}>
            <figure className="header-nav__item__icon">
              <Image
                src={"/icons/menu/DAISY_120x.png"}
                alt="bag"
                width={120}
                height={120}
                className="header-nav__item__icon__img1"
              />
              <Image
                src={"/icons/menu/DAISY_120x.png"}
                alt="bag"
                width={120}
                height={120}
                className="header-nav__item__icon__img2"
              />
            </figure>
            <span className="header-nav__item__text">Hooping is Paradise</span>
          </a>
        </li>
        <li className="header-nav__item">
          <a href={"/3"}>
            <figure className="header-nav__item__icon">
              <Image
                src={"/icons/menu/DAISY_120x.png"}
                alt="bag"
                width={120}
                height={120}
                className="header-nav__item__icon__img1"
              />
              <Image
                src={"/icons/menu/DAISY_120x.png"}
                alt="bag"
                width={120}
                height={120}
                className="header-nav__item__icon__img2"
              />
            </figure>
            <span className="header-nav__item__text">Hooping is Paradise</span>
          </a>
        </li>
      </ul>
    </div>
  );
};
