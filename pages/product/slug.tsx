import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { ShopLayout } from "../../components/layout/ShopLayout";
import { ProductDetails } from "../../components/products/productDetails/ProductDetails";
import { ProductSize } from "../../components/products/productSize/ProductSize";
import { initialData } from "../../database/products";

const product = initialData.products[0];

const ProductPage = () => {
  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <div className="product__container">
        <motion.div 
        className="product__image"
        initial={{x: -200, opacity: 0}}
        animate={{x: 0, opacity: 1, transition: {duration: 0.5}}}
        >
          <div className="product__image-container">
            <Image
              src={`/products/${product.images[0]}`}
              alt="img"
              width={380}
              height={380}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </motion.div>
        <motion.div 
        className="product__description"
        initial={{x: 200, opacity: 0}}
        animate={{x: 0, opacity: 1, transition: {duration: 0.5}}}
        >
          <div className="product__description-container">
            <h3>❤️‍🔥 BEST SELLER</h3>
            <h2>{product.title}</h2>
            <span className="product__description-price">${product.price}</span>
            <div className="product__description-promotion">
              <p>
                4 interest-free payments of $16.25 with <strong>Klarna</strong>.
              </p>
              <Link href="#" passHref>
                <a>Learn more</a>
              </Link>
            </div>
            <ProductSize
              sizes={product.sizes}
              selectedSize={product.sizes[0]}
            />
            <button className="btn">add to cart</button>

            <ProductDetails product={product} />
          </div>
        </motion.div>
      </div>
    </ShopLayout>
  );
};

export default ProductPage;
