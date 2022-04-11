import Image from "next/image";
import { FC, useState, useEffect, useLayoutEffect } from "react";
import { useDispatch } from "react-redux";
import { ICartProduct } from "../../../interfaces/cart";
import { updateQuantity } from "../../../redux/cartSlice";
import handler from "../../../pages/api/products/index";

interface Props {
  product: ICartProduct;
}

export const CartItem: FC<Props> = ({ product }) => {
  const dispatch = useDispatch();
  const price1 = product.price;
  const [tempCartProduct, setTempCartProduct] = useState<ICartProduct>({
    _id: product._id,
    image: product.image,
    price: product.price,
    size: product.size,
    slug: product.slug,
    title: product.title,
    gender: product.gender,
    type: product.type,
    quantity: 1,
  });

  const addOrRemoveProduct = (count: number) => {
    if (tempCartProduct.quantity + count >= 1) {
      if (count > 0) {
        setTempCartProduct((currentProduct) => ({
          ...currentProduct,
          quantity: currentProduct.quantity + 1,
        }));
      } else {
        setTempCartProduct((currentProduct) => ({
          ...currentProduct,
          quantity: tempCartProduct.quantity - 1,
        }));
      }
    }
  };

  useEffect(() => {
    dispatch(updateQuantity(tempCartProduct));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ tempCartProduct]);

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
        <span>{product.type}</span>

        <div className="quantity-selector">
          <button
            className="quantity-selector__btn"
            onClick={() => {
              addOrRemoveProduct(-1);
            }}
          >
            -
          </button>
          <div className="quantity-selector__number">
            {tempCartProduct.quantity}
          </div>
          <button
            className="quantity-selector__btn"
            onClick={() => {
              addOrRemoveProduct(+1);
            }}
          >
            +
          </button>
        </div>
      </div>
      <div className="cart__item-aside">
        <span>${tempCartProduct.price * tempCartProduct.quantity}</span>

        <button className="cart__item-remove-icon">
          <Image src="/icons/delete.svg" alt="trash" width={20} height={20} />
        </button>
      </div>
    </div>
  );
};
