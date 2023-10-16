import React from 'react'
import FooterSix from '../../components/footer/FooterSix'
import HeaderSix from '../../components/header/HeaderSix'
import CollectionArea from '../../components/index/indexseven/CollectionArea'
import SliderArea from '../../components/index/indexseven/SliderArea'
import GameShop from '../../components/index/indexseven/GameShop'
import GamesArea from '../../components/index/indexseven/GamesArea'
import ChairProduct from '../../components/index/indexseven/ChairProduct'
import ChairDiscount from '../../components/index/indexseven/ChairDiscount'
import BrandArea from '../../components/index/indexseven/BrandArea'



const Account = () => {
  return (
   <>
   {/* <HeaderSix/> */}
    <main>
        {/* <SliderArea/>
        <CollectionArea/>
        <GameShop/>
        <GamesArea/> */}
        <ChairProduct/>
        {/* <ChairDiscount/> */}
        <BrandArea/>
    </main>
   {/* <FooterSix/> */}
   </>
  )
}

export default Account