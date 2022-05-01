import { ShopLayout } from "../../../components/layout/ShopLayout";
import Link from "next/link";

import { ICartProduct } from "../../../interfaces/cart";
import { RootState } from "../../../redux/store";
import { useSelector } from "react-redux";

import { formatPrice } from "../../../utils/currency";
import { useRouter } from "next/router";
import { OrderItem } from "../../../components/checkout/orderItem/OrderItem";
import { useEffect } from "react";
import Cookies from "js-cookie";

const ShippingPage = () => {
  const { cart, subTotal, tax, total, shippingAddress } = useSelector(
    (state: RootState) => state.cart
  );

  const router = useRouter();

  const handleClick = () => {
    router.push("/checkout/address");
  };


  //todo: borrar todas las cookies, y  usar este hook en todos los componentes del checkout
  useEffect(() => {
    if ( !Cookies.get('firstName') ) {
        router.push('/checkout/address');
    }
}, [ router ]);

  return (
    <ShopLayout
      title={"Checkout Shipping - Overtime"}
      pageDescription={"Checkout Shipping - Overtime"}
    >
      <div className="checkout__address__container">
        <div className="checkout__steps">
          <Link href={"/checkout/cart"}>
            <a>
              <span style={{}}>Cart {"> "}</span>
            </a>
          </Link>
          <Link href={"/checkout/address"}>
            <a>
              <span style={{}}>Information {"> "}</span>
            </a>
          </Link>

          <span style={{ color: "#ff6600" }}>Summary {"> "}</span>
          <span style={{ color: "#bbb" }}>Payment</span>
        </div>

        <h1 className="title">Summary</h1>

        <div className="summary__cart__main">
          <div className="summary__cart__left">
            <div className="summary__address">
              <h2 className="summary__title">Shipping Address</h2>
              <div className="summary__address__info">
                
              
              <p>{shippingAddress?.firstName} {shippingAddress?.lastName}, {shippingAddress?.address}, {shippingAddress?.city}, {shippingAddress?.zip}, {shippingAddress?.country}  </p>
              
              </div>
            </div>

            <div className="card__main-container checkout">
              <h2 className="summary__title">Order Items</h2>

              {cart.map((item: ICartProduct) => (
                <OrderItem key={item.slug + item.size} product={item} />
              ))}
            </div>
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

export default ShippingPage;
