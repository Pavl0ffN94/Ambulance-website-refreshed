import { memo} from 'react';
import { Home } from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import {Contacts} from './pages/Contact';
import {Price} from './pages/Price';




const AppImpl = () => {
  return (
    <Routes >
      <Route index element={ <Home />} />
      <Route path='price' element={ <Price />} />
      <Route path='contact' element={ <Contacts />} />
    </Routes>
  )
}

export const App = memo(AppImpl)
