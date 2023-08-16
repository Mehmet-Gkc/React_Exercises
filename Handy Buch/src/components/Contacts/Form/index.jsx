import React, {useState} from 'react'

const initialForm = {fullname:"", phone_number:""}

function Form({ addContacts,contacts }) {
    const [form, setForm] = useState(initialForm)
    const [leer, setLeer] = useState(true)

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name]: e.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault()   

        if(form.fullname === "" || form.phone_number === "") {
            return setLeer(false)
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

        {!leer && <p className="error-message">Bitte Fullname und Phone Number hinzufügen</p>}

        <div className="form-group">
          <button className="form-button">Add</button>
        </div>
      </form>
    </div>
  )
}

export default Form
