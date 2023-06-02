import {useState} from 'react'

function Form({setusers}) {
    const [name, setName] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newUser = {
            id: crypto.randomUUID(),
            name,
            username,
            email,
            password
        };

        setusers((prevUsers) => [...prevUsers, newUser]);
    }    

    
  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder='name'
        value={name}
        onChange={(e) => setName(e.target.value)} 
      />
      <input 
        type="text"
        placeholder='user name'
        value={username}
        onChange={(e) => setUserName(e.target.value)} 
      />
      <input 
        type="email"
        placeholder='E-Mail'
        value={email}
        onChange={(e) => setEmail(e.target.value)} 
      />
      <input 
        type='password'
        placeholder='Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)} 
      />
      <button type='submit'>Add User</button>
      
    </form>
  )
}

export default Form
