import React, {useState} from 'react'

function SearchBar({onSearchCity}) {
    const [city, setCity] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearchCity(city)
    }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder='city name'
        value={city}
        onChange={(e) => setCity(e.target.value)} 
      />
      <button type='submit'>Suche</button>
    </form>
  )
}

export default SearchBar
