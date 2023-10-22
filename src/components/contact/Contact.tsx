import {memo, useState, useCallback} from 'react';
import './style.sass'
import {motion, AnimatePresence} from 'framer-motion';
import {licenseImg} from '../../types/license';
import { YMaps, Map, Placemark } from 'react-yandex-maps';



const ContactImpl = () => {

  const [isVisible, setVisible] = useState(false);
  const [isExpand, setExpand] = useState(0)

  const mapState = {
          center: [53.209627, 50.178877],
          zoom: 16
        }

  const handleExpandet = (id:number)=> {
    if(id !== isExpand){
      setExpand(id)
    } else {
      setExpand(0)
    }
  }

  const handleVisible = useCallback(()=> setVisible(!isVisible), [isVisible])


  return (
    <div className='wrapper'>
      <h1 className='title'> Контактная информация</h1>
      <div className='content'>
        <YMaps>
          <Map
          className='map'
          defaultState={mapState}>
            <Placemark geometry={[53.209627, 50.178877]} />
          </Map>
        </YMaps>
        <div className='org_info'>
          <h2> Телефоны для связи </h2>
          <strong>+7(846) 333-0-333 </strong>
          <br />
          <strong> +7(846) 991-03-03 </strong>
          <div className='contacts_org'>
              ООО «Самарская скорая» г. Самара, пр. К. Маркса 185 Лицензия
              №ЛО-63-01-003669 от 29.04.16 ИНН/КПП 6318006157/631801001 р\с
              40702810000030002279 в ф-ле "Самарский" ОАО "Альфа-Банк" г. Самара к\с
              30101810600000000964 БИК 043601964 ОКПО 14551258
          </div>
        </div>
        <div className='license'>
           <button
           onClick={handleVisible}
           className='license_btn'
           > Лицензия</button>
           <div className='license_wrapper'> 
            <AnimatePresence>
              {isVisible && (
                licenseImg.map(img=>
                 <motion.img
                  key={img.id}
                  src={img.src}
                  className= {`license_img ${isExpand === img.id ? 'big' : ''}`}
                  initial={{ opacity: 0 }}
                  animate={{  opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={()=>handleExpandet(img.id)}
                  /> 
                )
              )
              }
            </AnimatePresence>
           </div>
        </div>
      </div>
    </div>
  )
}

export const Contact = memo(ContactImpl);