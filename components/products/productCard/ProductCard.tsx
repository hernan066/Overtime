import Image from "next/image";
import Link from "next/link";
import { FC, useEffect } from "react";
import { IProduct } from "../../../interfaces/products";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface Props {
  product: IProduct;
  idx: number;
}

export const ProductCard: FC<Props> = ({ product, idx }) => {
  const item = {
    hidden: { opacity: 0,  y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, } },
  };

  const { ref, inView}= useInView();
  const animation = useAnimation();

  useEffect(() => {
   if(inView) {
     animation.start(item.show);
   }
     if(!inView) {
     animation.start(item.hidden);
   }  
  }, [inView]);
  

  return (
    <motion.div
      className="card__container"
     
      animate={animation}
     
      ref={ref}
    >
      <Link href="/product/slug" passHref prefetch={false}>
        <a>
          <div className="card__image-container">
            <div className="card__image-container-img1">
              <Image
                src={`/products/${product.images[0]}`}
                alt="img"
                width={380}
                height={380}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <div className="card__image-container-img2">
              <Image
                src={`/products/${product.images[1]}`}
                alt="img"
                width={380}
                height={380}
                layout="responsive"
                objectFit="cover"
              />
            </div>
          </div>
        </a>
      </Link>

      <div className="card__content">
        <div className="card__content-row1">
          <h3 className="card__title">{product.title}</h3>
          <p className="card__price">${product.price}</p>
        </div>
        <div className="card__content-row2">
          <p className="card__type">{product.type}</p>
        </div>
      </div>
    </motion.div>
  );
};
