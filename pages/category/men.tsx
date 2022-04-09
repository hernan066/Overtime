import { NextPage } from "next";
import { ShopLayout } from "../../components/layout/ShopLayout"
import { ProductsList } from "../../components/products/productList/ProductsList"
import { Loading } from "../../components/ui/loading/Loading"
import { useProducts } from "../../hooks/useProducts";

const MenPage: NextPage = () => {
    
    const { products, isLoading } = useProducts("/products?gender=men");
    
    return (
        <ShopLayout 
        title={"Overtime - Men Category"}
        pageDescription={"Buy de best products!!"}
      >
          <h1 style={{ fontSize: '46px', textAlign: 'center', fontFamily: "Oswald", padding: '20px', color: '#1d1d1d'}}>MEN&apos;S</h1>
        {isLoading ? <Loading /> : <ProductsList products={products} />}
      </ShopLayout>
    )
  }
  
  export default MenPage