import type { NextPage } from 'next';
import { ShopLayout } from '../components/layout/ShopLayout';
import { ProductCard } from '../components/products/ProductCard';


const Home: NextPage = () => {
  return (
    <ShopLayout title={'Overtime - Home'} pageDescription={'Buy de best products!!'}>
        <ProductCard />
    
    </ShopLayout>
  )
}

export default Home
