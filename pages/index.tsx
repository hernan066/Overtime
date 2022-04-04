import type { NextPage } from "next";
import { ShopLayout } from "../components/layout/ShopLayout";

import { ProductsList } from "../components/products/ProductsList";
import { initialData } from "../database/products";

const Home: NextPage = () => {
  return (
    <ShopLayout
      title={"Overtime - Home"}
      pageDescription={"Buy de best products!!"}
    >
      <ProductsList  products={ initialData.products as any } />
    </ShopLayout>
  );
};

export default Home;
