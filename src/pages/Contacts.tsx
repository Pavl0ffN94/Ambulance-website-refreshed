import {memo} from 'react'
import {Layaut} from '../components/layaut/Layaut';
import { Contact } from '../components/contact/Contact';



const ContactsImpl = () => {
  return (
    <Layaut>
      <Contact />
    </Layaut>
  
  )
}

export const Contacts = memo(ContactsImpl)