import {memo} from 'react'
import {dataPrice} from '../../helpers/data-price';
import {PriceCard} from '../priceCard/PriceCard';
import './style.sass'


const PriceListImpl = () => {
     return ( 
  <div className='pricelist' >
   { dataPrice.map(list => {
      return (
        <PriceCard 
        key={list.id} 
        id={list.id}
        headline={list.headline}
        cost1={list.cost1}
        cost2={list.cost2}
        clarification1={list.clarification1}
        clarification2={list.clarification2}
        >
        </PriceCard>
      )}
    )}
     </div>)
}

export const PriceList= memo(PriceListImpl)