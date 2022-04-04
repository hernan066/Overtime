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
        <div className="product__image">
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
        </div>
        <div className="product__description">
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
        </div>
      </div>
    </ShopLayout>
  );
};

export default ProductPage;
