import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { IProduct } from "../../../interfaces/products";
import { motion } from "framer-motion";

const productsVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { delay: 0.6 } },
};

interface Props {
  product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {
  return (
    <motion.div
      className="card__container"
      variants={productsVariants}
      initial="hidden"
      animate="visible"
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
