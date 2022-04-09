import { FC } from "react";
import Head from "next/head";
import { Navbar } from "../ui/navbar/Navbar";
import { PromoBar } from "../ui/promoBar/PromoBar";
import { CartSideBar } from "../cart/cartSideBar/CartSideBar";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { AnimatePresence, motion } from "framer-motion";


//import { Navbar, SideMenu } from '../ui';

interface Props {
  title: string;
  pageDescription: string;
  imageFullUrl?: string;
}

export const ShopLayout: FC<Props> = ({
  children,
  title,
  pageDescription,
  imageFullUrl,
}) => {
  const cartSideBar = useSelector((state: RootState) => state.ui.cartSideBar);
  

  return (
    <>
      <Head>
        <title>{title}</title>

        <meta name="description" content={pageDescription} />

        <meta name="og:title" content={title} />
        <meta name="og:description" content={pageDescription} />

        {imageFullUrl && <meta name="og:image" content={imageFullUrl} />}
      </Head>

      <PromoBar />

      <Navbar />

      <AnimatePresence exitBeforeEnter>
        {cartSideBar && <CartSideBar  />}
      </AnimatePresence>

      {/* <SideMenu /> */}

      <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      
      >{children}
      
      </motion.main>

      {/* Footer */}
      <footer>{/* TODO: mi custom footer */}</footer>
    </>
  );
};
