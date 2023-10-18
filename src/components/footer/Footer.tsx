import  {memo} from 'react';
import './style.sass';
import logo from '../../img/logo.svg'

const  FooterImpl = () => {
  return (
    <footer className='footer'>
       <img className='logo' src={logo} alt='ambulance car' /> 

      <div className='footer_contacts'>
        <div className='contacts'>
         <strong> ©  Самараская частная скорая </strong> 
        </div>
      </div> 
    </footer>
  )
}

export const Footer = memo(FooterImpl);