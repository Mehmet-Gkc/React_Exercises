function Users({ users }) {
console.log(users)
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <h3>{user.name}</h3>
            <p>{user.username}</p>
            <p>{user.email}</p>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Users
