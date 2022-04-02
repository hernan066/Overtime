import { FC } from "react";
import Head from "next/head";
import { Navbar } from "../ui/navbar/Navbar";
import { PromoBar } from "../ui/promoBar/PromoBar";

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

      {/* <SideMenu /> */}

      <main>{children}</main>

      {/* Footer */}
      <footer>{/* TODO: mi custom footer */}</footer>
    </>
  );
};
