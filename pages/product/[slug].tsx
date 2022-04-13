import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { ShopLayout } from "../../components/layout/ShopLayout";
import { ProductDetails } from "../../components/products/productDetails/ProductDetails";
import { ProductSize } from "../../components/products/productSize/ProductSize";
import { IProduct, ISize } from "../../interfaces/products";
import { NextPage } from "next";
import { GetStaticPaths } from "next";
import {
  getAllProductSlugs,
  getProductBySlug,
} from "../../database/dbProducts";
import { GetStaticProps } from "next";
import { useEffect, useState } from "react";
import { ICartProduct } from "../../interfaces/cart";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, loadCookies, updateCart } from "../../redux/cartSlice";
import { QueantitySelector } from "../../components/products/quantitySelector/QueantitySelector";
import { RootState } from "../../redux/store";
import { openCart } from "../../redux/uiSlice";
import Cookie from "js-cookie";

interface Props {
  product: IProduct;
}

const ProductPage: NextPage<Props> = ({ product }) => {
  const dispatch = useDispatch();

  const cart = useSelector((state: RootState) => state.cart.cart);

  const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
    _id: product._id,
    image: product.images[0],
    price: product.price,
    size: undefined,
    slug: product.slug,
    title: product.title,
    gender: product.gender,
    type: product.type,
    quantity: 1,
    totalPrice: product.price,
  });

  const selectedSize = (size: ISize) => {
    setTempCartProduct((currentProduct) => ({
      ...currentProduct,
      size,
    }));
  };
  const onUpdateQuantity = (quantity: number) => {
    setTempCartProduct((currentProduct) => ({
      ...currentProduct,
      quantity,
      totalPrice: currentProduct.price * quantity,
    }));
  };

  const addProductToCart = (product: ICartProduct) => {
    //buscar id repetido
    const productInCart = cart.some((p) => p._id === product._id);
    //si no esta en el carrito, lo agregamos
    if (!productInCart) return dispatch(addToCart(product));

    //si esta en el carrito, buscamos si tiene el mismo talle
    const productInCartButDifferentSize = cart.some(
      (p) => p._id === product._id && p.size === product.size
    );
    //si no tiene el mismo talle, lo agregamos
    if (!productInCartButDifferentSize) return dispatch(addToCart(product));

    //si llega aqui tienen el mismo id y el mismo talle, asi que los acumulamos
    const updatedProducts = cart.map((p) => {
      if (p._id !== product._id) return p;
      if (p.size !== product.size) return p;

      // Actualizar la cantidad

      return {
        ...p,
        quantity: p.quantity + product.quantity,
        totalPrice: p.totalPrice + product.totalPrice,
      };
    });

    dispatch(updateCart(updatedProducts));
  };

  
  useEffect(() => {
    const cookiesProduct = Cookie.get("cart") ? JSON.parse(Cookie.get("cart")!) : [];
     dispatch(loadCookies(cookiesProduct));
   }, [])
   
   
   
   useEffect(() => {
    Cookie.set("cart", JSON.stringify(cart));
   }, [cart])
  
  
  
  
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
                4 interest-free payments of ${product.price / 4} with{" "}
                <strong>Klarna</strong>.
              </p>
              <Link href="#" passHref>
                <a>Learn more</a>
              </Link>
            </div>

            <QueantitySelector
              currentValue={tempCartProduct.quantity}
              maxValue={product.inStock > 10 ? 10 : product.inStock}
              updatedQuantity={onUpdateQuantity}
            />

            <ProductSize
              sizes={product.sizes}
              selectedSize={tempCartProduct.size}
              onSelectedSize={selectedSize}
            />
            {tempCartProduct.size ? (
              <button
                className="btn"
                onClick={() => {
                  addProductToCart(tempCartProduct);
                  dispatch(openCart());
                }}
              >
                add to cart
              </button>
            ) : (
              <button className="btn" disabled style={{ background: "#ccc" }}>
                Select size
              </button>
            )}

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
