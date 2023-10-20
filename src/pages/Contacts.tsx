import {memo} from 'react'
import {Layaut} from '../components/layaut/Layaut';



const ContactsImpl = () => {
  return (
      <Layaut>
    <div>Contact</div>
    </Layaut>
  
  )
}

export const Contacts = memo(ContactsImpl)