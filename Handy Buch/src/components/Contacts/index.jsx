import React, {useState, useEffect} from 'react'
import List from './List'
import Form from './Form'


function Contacts() {
    const [contacts, setContacts] = useState([{
      fullname: "Kübra",
      phone_number: 123456
      },
      {
        fullname: "Irem",
        phone_number: 987456
      },]);
   

    useEffect(() => {
        console.log(contacts)
    }, [contacts])

  return (
    <div>
      <List contacts={contacts}/>
      <Form addContacts={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts
