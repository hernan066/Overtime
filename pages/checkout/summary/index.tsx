import { ShopLayout } from '../../../components/layout/ShopLayout';
import Link from "next/link";

const ShippingPage = () => {
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

         
          <span style={{ color: "#ff6600" }}>Summary {"> "}</span>
          <span style={{ color: "#bbb" }}>Payment</span>
        </div>

        <h1 className="title">Summary</h1>

        <div className="checkout__address__main">
          
        </div>
      </div>
    </ShopLayout>
    
    
  )
}

export default ShippingPage