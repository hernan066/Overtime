import type { NextPage } from "next";
import { ShopLayout } from "../components/layout/ShopLayout";

import { ProductsList } from "../components/products/productList/ProductsList";
import { Loading } from "../components/ui/loading/Loading";
import { useProducts } from "../hooks/useProducts";

const Home: NextPage = () => {
  const { products, isLoading } = useProducts("/products");

  return (
    <ShopLayout
      title={"Overtime - Home"}
      pageDescription={"Buy de best products!!"}
    >
      {isLoading ? <Loading /> : <ProductsList products={products} />}
    </ShopLayout>
  );
};

export default Home;
