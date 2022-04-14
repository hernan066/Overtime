import { animations, motion } from "framer-motion";
import Image from "next/image";
import { initialMenuData } from "../../../database/seed-data";

const menuVariants = {
  initial:{
    opacity: 0,
    y: "-50px",
  },
  animations:{
    opacity: 1,
    y: 0,
  },
  exit:{
    opacity: 0,
    y: "-30px",
  }

}

export const Menu = () => {
  return (
    <motion.div 
    className="header-nav__inner"
    variants={menuVariants}
    initial="initial"
    animate="animations"
    exit="exit"
    >
      <ul className="header-nav__items">
        
      {
        initialMenuData.menu.map((item) => {
          return (
            <li className="header-nav__item" key={item.img1}>
            <a href="#">
              <figure className="header-nav__item__icon">
                <div className="header-nav__item__icon__img1">
                  <Image
                    src={item.img1}
                    alt={item.nameMenu}
                    width={120}
                    height={120}
                    layout="fill"
                  />
                </div>
                <div className="header-nav__item__icon__img2">
                  <Image
                    src={item.img2}
                    alt={item.nameMenu}
                    width={120}
                    height={120}
                    layout="responsive"
                  />
                </div>
              </figure>
            </a>
              <span className="header-nav__item__text">{item.nameMenu}</span>
          </li>
          )
        })
      }
        
        
      
      
      </ul>
    </motion.div>
  );
};
