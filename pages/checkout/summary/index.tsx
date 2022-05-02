import { ShopLayout } from "../../../components/layout/ShopLayout";
import Link from "next/link";

import { ICartProduct } from "../../../interfaces/cart";
import { RootState } from "../../../redux/store";
import { useDispatch, useSelector } from "react-redux";

import { formatPrice } from "../../../utils/currency";
import { useRouter } from "next/router";
import { OrderItem } from "../../../components/checkout/orderItem/OrderItem";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import shopApi from "../../../api/shopApi";
import { IOrder } from "../../../interfaces/order";
import axios from "axios";
import { orderComplete } from "../../../redux/cartSlice";

const ShippingPage = () => {
  const { cart, numberOfItems, subTotal, tax, total, shippingAddress } =
    useSelector((state: RootState) => state.cart);

  const router = useRouter();
  const dispatch = useDispatch();

  const [isPosting, setIsPosting] = useState(false);
  const [error, setError] = useState("");

  //verifica si hay una direccion guardada en las cookies
  useEffect(() => {
    if (!Cookies.get("firstName")) {
      router.push("/checkout/address");
    }
  }, [router]);

  const createOrder = async ():Promise<{hasError: boolean, message: string}> => {
    if (!shippingAddress) {
      throw new Error("No shipping address");
    }

    const body: IOrder = {
      orderItems: cart,
      shippingAddress: shippingAddress,
      numberOfItems: numberOfItems,
      subTotal: subTotal,
      tax: tax,
      total: total,
      isPaid: false,
    };

    try {
      const { data } = await shopApi.post<IOrder>("/orders", body);

      //console.log(data);
      dispatch(orderComplete());

      return{
        hasError: false,
        message: data._id!
      }

      //TODO limpiar estado
    } catch (error) {
      console.log(error); if ( axios.isAxiosError(error) ) {
        return {
            hasError: true,
            message: error.response?.data.message
        }
    }
    return {
        hasError: true,
        message : 'Error no controlado, hable con el administrador'
    }
    }
  };

  const sendOrder = async () => {
    setIsPosting(true);
    
    const{hasError, message} = await createOrder();
    
    if(hasError){
      setIsPosting(false);
      setError(message);
      return;
    }


    router.replace(`/orders/${ message }`);
    
  };

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
                <p>
                  {shippingAddress?.firstName} {shippingAddress?.lastName},{" "}
                  {shippingAddress?.address}, {shippingAddress?.city},{" "}
                  {shippingAddress?.zip}, {shippingAddress?.country}{" "}
                </p>
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
            <button
              className="btn"
              onClick={() => sendOrder()}
              disabled={isPosting}
            >
              Checkout
            </button>

            {error && <p className="checkout__error">{error}</p>}
          </div>
        </div>
      </div>
    </ShopLayout>
  );
};

export default ShippingPage;
