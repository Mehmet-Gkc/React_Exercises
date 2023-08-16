import React, { useState } from 'react'


function List({ contacts }) {
    const [filterText, setFilterText] = useState("")

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
            <li className="contact-item" key={index}>{item.fullname} - {item.phone_number}</li>
        ))}
      </ul>
    </div>
  )
}

export default List
