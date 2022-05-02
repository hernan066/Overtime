import { GetServerSideProps, NextPage } from "next";
import { getSession } from "next-auth/react";
import Link from "next/link";
import { OrderItem } from "../../components/checkout/orderItem/OrderItem";
import { ShopLayout } from "../../components/layout/ShopLayout";
import { getOrderById } from "../../database/dbOrders";
import { ICartProduct } from "../../interfaces/cart";
import { IOrder } from "../../interfaces/order";
import { formatPrice } from "../../utils/currency";

interface Props {
    order: IOrder;
}
const OrderPage: NextPage<Props> = ({ order }) => {
  
    const { shippingAddress } = order;

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

          <span style={{}}>Summary {"> "}</span>
          <span style={{  color: "#ff6600"  }}>Payment</span>
        </div>

        <h1 className="title">Payment</h1>

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

               {order.orderItems.map((item: ICartProduct) => (
                <OrderItem key={item.slug + item.size} product={item} />
              ))} 
            </div>
          </div>

          <div className="checkout__cart__resume">
            <h2>Resume</h2>
            <div className="checkout__cart__resume__subtotal">
              <span>Subtotal:</span>
              <span>{formatPrice(order.subTotal)}</span>
            </div>
            <div className="checkout__cart__resume__tax">
              <span>
                Taxes({Number(process.env.NEXT_PUBLIC_TAX_RATE) * 100 + "%"}):
              </span>
              <span>{formatPrice(order.tax)}</span>
            </div>
            <div className="checkout__cart__resume__total">
              <span>Total:</span>
              <span>{formatPrice(order.total)}</span>
            </div>
            <button
              className="btn"
             
            >
              pay
            </button>

           
          </div> 
        </div>
      </div>
    </ShopLayout>
  );
};


export const getServerSideProps: GetServerSideProps = async ({ req, query }) => {
    
    const { id = '' } = query;
    const session:any = await getSession({ req });

    if ( !session ) {
        return {
            redirect: {
                destination: `/auth/login?p=/orders/${ id }`,
                permanent: false,
            }
        }
    }

    const order = await getOrderById( id.toString() );

    if ( !order ) {
        return {
            redirect: {
                destination: '/orders/history',
                permanent: false,
            }
        }
    }

    if ( order.user !== session.user._id ) {
        return {
            redirect: {
                destination: '/orders/history',
                permanent: false,
            }
        }
    }


    return {
        props: {
            order
        }
    }
}

export default OrderPage;
