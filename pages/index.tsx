import type { NextPage } from 'next';
import { ShopLayout } from '../components/layout/ShopLayout';


const Home: NextPage = () => {
  return (
    <ShopLayout title={'Overtime - Home'} pageDescription={'Buy de best products!!'}>
        <h1>Tienda</h1>
    
    </ShopLayout>
  )
}

export default Home
