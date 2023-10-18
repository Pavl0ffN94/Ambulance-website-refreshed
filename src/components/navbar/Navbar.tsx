import {memo} from 'react';
import './style.sass';
import {Link} from 'react-router-dom';


const  NavbarImpl = () => {
  return (
          <div className='nav_list'>
            <Link className='nav_list-item' to='/'>
             Главная
            </Link>

            <Link className='nav_list-item' to='/price'>
              Услуги
            </Link>

            <Link className='nav_list-item' to='/contacts'>
              Контакты
            </Link>
          </div>
  )
}

export const Navbar = memo(NavbarImpl);