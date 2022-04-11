import Image from "next/image"
import { FC, useState } from "react"
import { useDispatch } from "react-redux";
import { ICartProduct } from "../../../interfaces/cart"
import { updateQuantity } from "../../../redux/cartSlice";

interface Props {
    product: ICartProduct;
}


export const CartItem:FC<Props> = ({product}) => {
  const dispatch = useDispatch();
const [countProduct, setCountProduct] = useState<number>(1);



  const addOrRemoveProduct = (count: number) => {
    if (countProduct + count >= 1) {
      setCountProduct((currentCount) => currentCount + count);
      dispatch(updateQuantity({product, countProduct} ));
      
      //falta el dispatch al carrito
      //falta validar que no sea mayor al stock
    }
  };
  
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
                  onClick={() => addOrRemoveProduct(-1)}
                >
                  -
                </button>
                <div className="quantity-selector__number">{countProduct}</div>
                <button
                  className="quantity-selector__btn"
                  onClick={() => addOrRemoveProduct(+1)}
                >
                  +
                </button>
              </div>
            </div>
            <div className="cart__item-aside">
              <span>${product.price}</span>

              <button className="cart__item-remove-icon">
                <Image
                  src="/icons/delete.svg"
                  alt="trash"
                  width={20}
                  height={20}
                />
              </button>
            </div>
          </div>
  )
}
