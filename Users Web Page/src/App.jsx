import './App.css'
import Form from './Components/Form';
import Users from './Components/Users';
import { useState, useEffect } from 'react';

function App() {
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();      
      setUsers(data)
    } 
    if(users.length === 0) {
      fetchData()
    }

  }, [users])

  return (
    <div className='App'>
      <Form setusers={setUsers}/>
      <Users users={users}/>
    </div>
  )
}

export default App
