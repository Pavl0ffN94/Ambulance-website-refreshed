import  {memo} from 'react';
import './style.sass';
import {NavLink} from 'react-router-dom';
import logo from '../../img/logo.svg'

const  FooterImpl = () => {
  return (
    <footer className='footer'>
       <img className='logo' src={logo} alt='ambulance car' /> 

      <div className='footer_contacts'>
        <div className='contacts'>
          <NavLink className='footer_link' to='/'>
           Главная
          </NavLink>

          <NavLink className='footer_link' to='./PriceList'>
             Услуги
          </NavLink>

          <NavLink className='footer_link' to='/Contacts'>
            Контакты
          </NavLink>
        </div>
      </div> 
    </footer>
  )
}

export const Footer = memo(FooterImpl);