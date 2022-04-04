import { useDispatch } from "react-redux";
import { closeCart } from "../../../redux/uiSlice";
import { motion } from "framer-motion";

const cartVariants = {
  hidden: { x: 600 },
  visible: { x: 0 },
  exit: { x: 600 },
};
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0 } },
  exit: { opacity: 0, transition: { duration: 0 } },
};

export const CartSideBar = () => {
  const dispatch = useDispatch();

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
          <div className="cart__main">
            <div className="cart__main-empty">
              <p className="cart-emojis">😔🎒</p>
              <p>You got nothing in your bag</p>
              <button className="btn continue">Continue Shopping</button>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};
