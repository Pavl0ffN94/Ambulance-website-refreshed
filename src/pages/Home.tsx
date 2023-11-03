import {memo, lazy, Suspense} from 'react'
import {Layaut} from '../components/layaut/Layaut';

const Main = lazy(()=> import('../components/main/Main'))   

const  HomeImpl = ()=> {
  return (
  <Layaut>
    <Suspense fallback={<p>Loading ...</p>}>
    <Main />
    </Suspense>
  </Layaut>
  )
}

export const Home = memo(HomeImpl)