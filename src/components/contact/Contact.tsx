import {memo, useState, useCallback} from 'react';
import './style.sass'
import {motion, AnimatePresence} from 'framer-motion';
import license1 from '../../img/str1.jpg'
import license2 from '../../img/str2.jpg'
import license3 from '../../img/str3.jpg'



const ContactImpl = () => {

  const [isVisible, setVisible] = useState(false);

  const handleVisible = useCallback(()=> {setVisible(!isVisible)}, [isVisible])

  return (
    <div className='wrapper'>
      <h1 className='title'> Контактная информация</h1>
      <div className='content'>
        <div className='map'>
          <iframe
            title='map'
            src='https://yandex.ru/map-widget/v1/?um=constructor%3A9aec04ee614409e1bfb07e7b0701b968a3271d8963ce2849e56fd275d94f0336&amp;source=constructor'
            width='500'
            height='400'
            frameBorder='0'></iframe>
        </div>
        <div className='org_info'>
          <h2> Телефоны для связи </h2>
          <strong>
            <p> +7(846) 333-0-333 </p>
            <br />
            <p> +7(846) 991-03-03 </p>
            <br />
          </strong>

          <div className='contacts_org'>
              ООО «Самарская скорая» г. Самара, пр. К. Маркса 185 Лицензия
              №ЛО-63-01-003669 от 29.04.16 ИНН/КПП 6318006157/631801001 р\с
              40702810000030002279 в ф-ле "Самарский" ОАО "Альфа-Банк" г. Самара к\с
              30101810600000000964 БИК 043601964 ОКПО 14551258
          </div>
        <div className='license'>
           <button
           onClick={handleVisible}
           > Лицензия</button>
           <AnimatePresence>
              {isVisible && (
                <>
                <motion.img 
                src={license1}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                />
                   <motion.img 
                src={license2}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                /> 
                  <motion.img 
                src={license3}
                initial={{ x: 300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -300, opacity: 0 }}
                />
                </>
              )}
           </AnimatePresence>
        </div>
        </div>
      </div>
    </div>
  )
}

export const Contact = memo(ContactImpl);