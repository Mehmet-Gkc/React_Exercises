import { useState, useEffect } from 'react'

function SearchBar({ onSearch }) {
    const [inputValue, setInputValue] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("input value:", inputValue)
        onSearch(inputValue)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
            type="text"
            placeholder='search for a film'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
        />
        <button type='submit'>Search</button>
      </form>
    </div>
  )
}

export default SearchBar
