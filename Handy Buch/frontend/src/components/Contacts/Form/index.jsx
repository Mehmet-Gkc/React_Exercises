import React, {useState} from 'react'
import axios from 'axios';

const initialForm = {fullname:"", phone_number:""}

function Form({ addContacts,contacts }) {
    const [form, setForm] = useState(initialForm)
    const [message, setMessage] = useState()

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }


    const onSubmit = async (e) => {
        e.preventDefault()   

        try {
          const response = await axios.post("http://localhost:4004/phones", form)
          console.log("res", response.data)
        } catch (error) {
          console.log(error)
        }


        if(form.fullname === "" || form.phone_number === "") {
            return setMessage(false)
        }
        addContacts([...contacts, form])
        console.log(form)

        setForm(initialForm)
    }

  
  return (
    <div className="form-container">
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input type="text" name="fullname" value={form.fullname} placeholder="Fullname" className="form-input" onChange={onChangeInput}/>
        </div>
        <div className="form-group">
          <input type="text" name="phone_number" value={form.phone_number} placeholder="Phone number" className="form-input" onChange={onChangeInput}/>
        </div>

        {message ? <p className="error-message">successfully added to the book</p> : <p className="error-message">Bitte Fullname und Phone Number hinzufügen</p>}

        <div className="form-group">
          <button className="form-button">Add</button>
        </div>
      </form>
    </div>
  )
}

export default Form
