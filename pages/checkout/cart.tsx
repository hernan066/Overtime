import { AnimatePresence } from "framer-motion";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { CartItem } from "../../components/cart/cartSideBar/CartItem";
import { ShopLayout } from "../../components/layout/ShopLayout";
import { ICartProduct } from "../../interfaces/cart";
import { RootState } from "../../redux/store";
import { formatPrice } from "../../utils/currency";

const CartPage: NextPage = () => {
  const { cart, subTotal, tax, total } = useSelector(
    (state: RootState) => state.cart
  );

  const router = useRouter();

  const handleClick = () => {
    router.push("/checkout/address");
  };

  return (
    <ShopLayout title={"Cart - Overtime"} pageDescription={"Cart - Overtime"}>
      <div className="checkout__cart__container">
        <div className="checkout__steps">
          <span style={{color: "#ff6600"}}>Cart {"> "}</span>
          <span style={{ color: "#bbb" }}>Information {"> "}</span>
          <span style={{ color: "#bbb" }}>Shipping {"> "}</span>
          <span style={{ color: "#bbb" }}>Payment</span>
        </div>

        <h1 className="title">YOUR CART</h1>

        <div className="checkout__cart__main">
          <div className="card__main-container checkout">
            <AnimatePresence>
              {cart.map((item: ICartProduct, idx: number) => (
                <CartItem
                  key={item.slug + item.size}
                  product={item}
                  idx={idx}
                />
              ))}
            </AnimatePresence>
          </div>

          <div className="checkout__cart__resume">
            <h2>Resume</h2>
            <div className="checkout__cart__resume__subtotal">
              <span>Subtotal:</span>
              <span>{formatPrice(subTotal)}</span>
            </div>
            <div className="checkout__cart__resume__tax">
              <span>
                Taxes({Number(process.env.NEXT_PUBLIC_TAX_RATE) * 100 + "%"}):
              </span>
              <span>{formatPrice(tax)}</span>
            </div>
            <div className="checkout__cart__resume__total">
              <span>Total:</span>
              <span>{formatPrice(total)}</span>
            </div>
            <button className="btn" onClick={() => handleClick()}>
              Checkout
            </button>
          </div>
        </div>
      </div>
    </ShopLayout>
  );
};

export default CartPage;
