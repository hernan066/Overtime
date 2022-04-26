import Image from "next/image";
import { FC } from "react";

import { ICartProduct } from "../../../interfaces/cart";

interface Props {
  product: ICartProduct;
}

export const OrderItem: FC<Props> = ({ product }) => {
  return (
    <div className="cart__item-container">
      <div className="cart__item-img">
        <Image
          src={`/products/${product.image}`}
          alt={product.title}
          width={100}
          height={100}
        />
      </div>
      <div className="cart__item-details">
        <h4>{product.title}</h4>
        <div className="cart__item-details-size-quantity">
          <span>Size {product.size}</span>
          {"  -  "}
          <span>Quantity: {product.quantity}</span>
        </div>
      </div>
      <div className="cart__item-aside">
        <span>${product.totalPrice}</span>
      </div>
    </div>
  );
};
