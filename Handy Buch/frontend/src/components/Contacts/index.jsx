import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import axios from 'axios';
import List from './List'
import Form from './Form'


function Contacts () {
  const params = useParams();
    const [contacts, setContacts] = useState([]);
   

    useEffect(() => {
      const fetchPhoneBook = async () => {
          const response = await axios.get(`http://localhost:4004/phones`);
          const data = response.data;
          console.log(data);
          setContacts(data);
        };
        fetchPhoneBook()
    }, [])

    const handleDelete = async (phoneId) => {
      try {
        await axios.delete(`http://localhost:4004/phones/${phoneId}`)
        setContacts((prevPhone) => prevPhone.filter((item) => item._id !== phoneId))
      } catch (error) {
        console.log(error)
      }
    }

  return (
    <div>
      <List contacts={contacts} handleDelete={handleDelete}/>
      <Form addContacts={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts
