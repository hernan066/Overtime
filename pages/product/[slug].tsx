import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { ShopLayout } from "../../components/layout/ShopLayout";
import { ProductDetails } from "../../components/products/productDetails/ProductDetails";
import { ProductSize } from "../../components/products/productSize/ProductSize";
import { IProduct } from "../../interfaces/products";
import { NextPage } from "next";
import { GetStaticPaths } from "next";
import {
  getAllProductSlugs,
  getProductBySlug,
} from "../../database/dbProducts";
import { GetStaticProps } from "next";

interface Props {
  product: IProduct;
}

const ProductPage: NextPage<Props> = ({ product }) => {
  /* const router = useRouter();
  const { products: product, isLoading} = useProducts(`/products/${router.query.slug}`);

  if(isLoading) return <p>Loading...</p>; */

  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <div className="product__container">
        <motion.div
          className="product__image"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
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
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { duration: 0.5 } }}
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

/* export const getServerSideProps: GetServerSideProps = async ({params}) => {
     
  
  const {slug=''} = params as {slug:string};
  
  const product = await getProductBySlug(slug);

  if(!product) {
    return{
      redirect:{
        destination:'/',
        permanent:false
      }
    }
  }
  
  return {
    props:{
      product
    }
  }
} */

export const getStaticPaths: GetStaticPaths = async (ctx) => {
  const res = await getAllProductSlugs();

  return {
    paths: res.map(({ slug }) => ({
      params: {
        slug,
      },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug = "" } = params as { slug: string };

  const product = await getProductBySlug(slug);

  if (!product) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24,
  };
};

export default ProductPage;
