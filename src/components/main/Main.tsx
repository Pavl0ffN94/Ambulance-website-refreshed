import {memo} from 'react'
import './style.sass'
import ambulanceCar from '../../img/Ambulance-car.png'
import ekg from '../../img/ekg.svg';

const MainImpl = () => {
  return (
        <>
      <div className='container'>
          <div className='header_text'>
            <div className='header_title'>
              <h1 className='header_title'>
                Скорая помощь: <br /> оперативно и эффективно.
              </h1>
            </div>
            <div className='header_text'>
                Скорая помощь <strong> 24/7:</strong> мы всегда на связи и готовы прибыть
                в любое время суток для оказание неотложной 
                медицинской помощи.
            </div>
          </div>
          <div className='header_phone'>
              <strong> +7(846)333-0-333 </strong> 
              <strong> +7(846)991-03-03 </strong> 
            Наши номера
          </div>
        <img className='header_img' src={ambulanceCar} alt='header med'/>
        <img className='header_ekg' src={ekg} alt='ekg'/>
      </div>
    </>
  )
}

 const Main = memo(MainImpl)
 export default Main