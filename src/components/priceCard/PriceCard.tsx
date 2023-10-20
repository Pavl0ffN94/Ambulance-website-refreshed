import  {memo, useState, useCallback} from 'react'
import {motion, AnimatePresence} from 'framer-motion';
import './style.sass'
import {IPriceCardProps} from 'types';



const PriceCardImpl: React.FC<IPriceCardProps> = ({headline, cost1, cost2, clarification1, clarification2}) => {

  const [isVisible, setVisible] = useState(false);

  const handleVisibility = useCallback(() => setVisible(!isVisible),[isVisible]);

  return (
    <div className='card_wrapper'> 
      <motion.button 
       style={{overflow: 'hidden'}}
       onClick={handleVisibility}
       className={`btn ${isVisible ? 'rotated' : ''}`}>
        {headline}
      </motion.button>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{height: 0, opacity: 0}}
            animate={{height: 'auto', opacity: [0, 1] }}
            exit={{height: 0, opacity: [1, 0]}}
            transition={{duration: 0.4, type:'tween'}}>
            <div className="card_visible">
               <div className='text' > 
                  {clarification1}
                <strong>  
                  {cost1}
                </strong>
              </div>
              <div className='text' > 
                {clarification2}
                  <strong>  
                {cost2 }
                  </strong>
              </div>
            </div> 
          </motion.div>
        )}
      </AnimatePresence>
      </div>
  )
}

export const PriceCard = memo(PriceCardImpl)