import {memo} from 'react'
import {Layaut} from '../components/layaut/Layaut';
import {PriceList} from '../components/priceList/PriceList';

const PriceImpl = () => {
  return (
   <Layaut>
      <PriceList />
  </Layaut>
  )
}

export const Price = memo(PriceImpl)