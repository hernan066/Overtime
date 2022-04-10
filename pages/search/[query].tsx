import type { NextPage, GetServerSideProps } from "next";

import { ShopLayout } from "../../components/layout/ShopLayout";

import { ProductsList } from "../../components/products/productList/ProductsList";

import { getProductsByTerm, getAllProducts } from '../../database/dbProducts';
import { IProduct } from "../../interfaces/products";
import { useRouter } from "next/router";

interface Props {
  products: IProduct[];
  foundProducts: boolean;
  query: string;
}

const SearchPage: NextPage<Props> = ({ products, foundProducts, query }) => {
  return (
    <ShopLayout
      title={"Overtime - Search"}
      pageDescription={"Buy de best products!!"}
    >
      {foundProducts ? (
        <p
          style={{
            fontSize: "16px",
            textAlign: "center",
            fontFamily: "Oswald",
            padding: "20px",
            color: "#1d1d1d",
          }}
        >
          {products.length} items found matching &quot;{query}&quot;
        </p>
      ) : (
        <p
          style={{
            fontSize: "16px",
            textAlign: "center",
            fontFamily: "Oswald",
            padding: "20px",
            color: "#1d1d1d",
          }}
        >
          Item not found.
        </p>
      )}

      <ProductsList products={products} />
    </ShopLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { query = "" } = params as { query: string };

  if (query.length === 0) {
    return {
      redirect: {
        destination: "/",
        permanent: true,
      },
    };
  }

  let products = await getProductsByTerm(query);
  const foundProducts = products.length > 0;

  if(!foundProducts) {
    products = await getAllProducts();
  }

  return {
    props: {
      products,
      foundProducts,
      query,
    },
  };
};

export default SearchPage;
