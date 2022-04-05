import { useDispatch } from "react-redux";
import { closeCart } from "../../../redux/uiSlice";
import { motion } from "framer-motion";
import { initialData } from "../../../database/products";
import Image from "next/image";

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

const product = initialData.products[0];

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
          {/* <div className="cart__main">
            <div className="cart__main-empty">
              <p className="cart-emojis">😔🎒</p>
              <p>You got nothing in your bag</p>
              <button className="btn continue">Continue Shopping</button>
            </div>
          </div> */}

          <div className="cart__item-container">
            <div className="cart__item-img">
              <Image
                src={`/products/${product.images[0]}`}
                alt={product.title}
                width={100}
                height={100}
              />
            </div>
            <div className="cart__item-details">
              <h4>{product.title}</h4>
              <span>{product.type}</span>

              <div className="quantity-selector">
                <button className="quantity-selector__btn">-</button>
                <div className="quantity-selector__number">1</div>
                <button className="quantity-selector__btn">+</button>
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

          <div className="cart__checkout-container">
            <div className="cart__checkout-subtotal">
              <span>Subtotal:</span>
              <span>$100</span>
            </div>
            <button className="btn">checkout</button>
            <p>
              By checking out, I agree to the Terms of Use and acknowledge that
              I have read the Privacy Policy. Shipping and promotions calculated
              in checkout.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
};
