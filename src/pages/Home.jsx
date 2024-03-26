import React from 'react'
import Banner from '../components/Home/Banner';
import Products from '../components/Home/Products';
import LatestProduct from '../components/Home/LatestProduct';
import TV from '../components/Home/TV';


const Home = () => {
  return (
    <div>
        <Banner/>
        <LatestProduct/>
        <Products/>
        <TV/>
    </div>
  )
}

export default Home