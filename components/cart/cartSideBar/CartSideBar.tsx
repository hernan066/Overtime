import { useDispatch, useSelector } from "react-redux";
import { closeCart } from "../../../redux/uiSlice";
import { AnimatePresence, motion } from "framer-motion";
import { RootState } from "../../../redux/store";
import { CartItem } from "./CartItem";
import { CartEmpty } from "./CartEmpty";
import { ICartProduct } from "../../../interfaces/cart";
import { useRouter } from "next/router";

const cartVariants = {
  hidden: { x: 600 },
  visible: { x: 0, transition: { ease: "easeInOut" } },
  exit: { x: 600, transition: { ease: "easeInOut" } },
};
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0 } },
  exit: { opacity: 0, transition: { duration: 0 } },
};

export const CartSideBar = () => {
  const dispatch = useDispatch();
  const { cart, subTotal } = useSelector((state: RootState) => state.cart);

  const router = useRouter();
  
  const handleClick = () => {
    dispatch(closeCart());
    router.push("/checkout/cart");
  };
  
  
  return (
    <>
      <motion.div
        className="overlay-cart"
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      ></motion.div>
      <div className="cart__container">
        <motion.div
          className="cart__wrapper"
          variants={cartVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="cart__main-header">
            <h2>Your cart</h2>
            <button
              className="btn-cart-close"
              onClick={() => dispatch(closeCart())}
            >
              X
            </button>
          </div>

          {cart.length > 0 ? (
            <>
              <div className="card__main-overflow">
                <div className="card__main-container">
                  <AnimatePresence >
                    {cart.map((item: ICartProduct, idx: number) => (
                      <CartItem
                        key={item.slug + item.size}
                        product={item}
                        idx={idx}
                      />
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              <div className="cart__checkout-container">
                <div className="cart__checkout-subtotal">
                  <span>Subtotal:</span>
                  <span>${subTotal}</span>
                </div>
                <button className="btn" onClick={()=> handleClick()}>checkout</button>
                <p>
                  By checking out, I agree to the Terms of Use and acknowledge
                  that I have read the Privacy Policy. Shipping and promotions
                  calculated in checkout.
                </p>
              </div>
            </>
          ) : (
            <AnimatePresence exitBeforeEnter  >
              <CartEmpty />
            </AnimatePresence>
          )}
        </motion.div>
      </div>
    </>
  );
};
