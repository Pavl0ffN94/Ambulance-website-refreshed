import React, {memo} from 'react'
import './style.sass';
import {Footer} from '../footer/Footer';
import {Navbar} from '../navbar/Navbar';

type LayoutProps = {
  children: JSX.Element;
};

const LayautImpl: React.FC<LayoutProps> = ({children}) => {
  return (
    <div className='layaut'>
    <Navbar />
    <main className='main'>{children}</main>
    <Footer />
    </div>

  )
}

export const Layaut = memo(LayautImpl)