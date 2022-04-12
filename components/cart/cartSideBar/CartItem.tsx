import Image from "next/image";
import { FC } from "react";
import { useDispatch } from "react-redux";

import { ICartProduct } from "../../../interfaces/cart";
import { deleteProduct } from "../../../redux/cartSlice";

interface Props {
  product: ICartProduct;
}

export const CartItem: FC<Props> = ({ product }) => {
  const dispatch = useDispatch();
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

        <span>Size {product.size}</span>
        <br />
        <span>Quantity: {product.quantity}</span>
      </div>
      <div className="cart__item-aside">
        <span>${product.totalPrice}</span>

        <button
          className="cart__item-remove-icon"
          onClick={() => dispatch(deleteProduct(product))}
        >
          <Image src="/icons/delete.svg" alt="trash" width={20} height={20} />
        </button>
      </div>
    </div>
  );
};
