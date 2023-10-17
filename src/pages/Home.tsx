import {memo} from 'react'
import {Layaut} from '../components/layaut/Layaut';
import {PriceList} from '../components/priceList/PriceList';


const  HomeImpl = ()=> {
  return (
     <Layaut>
   <PriceList />
  </Layaut>
  )
}

export const Home = memo(HomeImpl)