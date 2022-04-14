import Image from "next/image";
import { FC } from "react";
import { useDispatch } from "react-redux";

import { ICartProduct } from "../../../interfaces/cart";
import { deleteProduct } from "../../../redux/cartSlice";
import { motion } from "framer-motion";

interface Props {
  product: ICartProduct;
  idx: number;
}

export const CartItem: FC<Props> = ({ product, idx }) => {
  
  const cartItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, delay: 0.3 * (idx+1) },
    },
    exit: { opacity: 0, transition: { duration: 0.4 }, },
  };

  const dispatch = useDispatch();

  return (
    <motion.div
      className="cart__item-container"
      variants={cartItemVariants}
      initial="hidden"
      animate="visible"
      exit="exit" 
    >
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
    </motion.div>
  );
};
