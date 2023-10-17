import {memo} from 'react';
import './style.sass';
import {NavLink} from 'react-router-dom';
import logo from '../../img/logo.svg'

const  NavbarImpl = () => {
  return (
    <nav className='nav'>
        <div className='nav_row'>
          <NavLink to='/'>
            <img src={logo} alt='logo-ambulance' className='logo' />
          </NavLink>
          <div className='nav_list'>
            <NavLink className='nav_list-item' to='/'>
             Главная
            </NavLink>

            <NavLink className='nav_list-item' to='./PriceList'>
              Услуги
            </NavLink>

            <NavLink className='nav_list-item' to='/Contacts'>
              Контакты
            </NavLink>
          </div>
        </div>

    </nav>
  )
}

export const Navbar = memo(NavbarImpl);