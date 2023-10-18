import {memo} from 'react'
import {Layaut} from '../components/layaut/Layaut';
import {Main} from '../components/main/Main';


const  HomeImpl = ()=> {
  return (
  <Layaut>
    <Main />
  </Layaut>
  )
}

export const Home = memo(HomeImpl)