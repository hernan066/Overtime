import React, { FC } from "react";

import { IProduct } from "../../../interfaces/products";
import { ProductCard } from "../productCard/ProductCard";

interface Props {
  products: IProduct[];
}

export const ProductsList: FC<Props> = ({ products }) => {
  return (
    <div className="cards__container">
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </div>
  );
};
