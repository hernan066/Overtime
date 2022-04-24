import { ShopLayout } from '../../../components/layout/ShopLayout';
import Link from "next/link";

const PaymentPage = () => {
  return (
    <ShopLayout title={'Checkout Shipping - Overtime'} pageDescription={'Checkout Shipping - Overtime'}>

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
          <Link href={"/checkout/summary"}>
            <a>
              <span style={{}}>Summary {"> "}</span>
            </a>
          </Link>

         
          
          <span style={{ color: "#ff6600" }}>Payment</span>
        </div>

        <h1 className="title">Payment</h1>

        <div className="checkout__address__main">
          
        </div>
      </div>
    </ShopLayout>
    
    
  )
}

export default PaymentPage