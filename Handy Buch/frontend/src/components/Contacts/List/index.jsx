import React, { useState } from 'react'
import axios from 'axios';


function List({ contacts, handleDelete }) {
    const [filterText, setFilterText] = useState("")
    const [deletedContacts, setDeletedContacts] = useState(contacts)

    
    const filtered = contacts.filter((item) => {
      return Object.keys(item).some((key) => 
        item[key].toString().toLowerCase().includes(filterText.toLocaleLowerCase())
      ) 
    })
    console.log(filtered)

   
  return (
    <div className="contact-list-container">
        <input 
            className='filter-input'
            type="text"
            placeholder='Filter contact'
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
        />
      <ul className="contact-list">
        {filtered.map((item, index) => (
            <li className="contact-item" key={index}>
              {item.fullname} - {item.phone_number} 
              <button className='delete-button'>Delete</button>
              <button className='change-button'>Change</button>
            </li>
        ))}
      </ul>
    </div>
  )
}

export default List
