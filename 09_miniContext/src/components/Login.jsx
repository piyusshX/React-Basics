import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'


function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }

  return (
    <div className=''>
        <h2>Login</h2>
        <div className='flex flex-col text-center gap-4 mt-7'>
          <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)}  />
          <input type="text" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)}  />
          <button onClick={handleSubmit}>Submit</button>
        </div>
    </div>
  )
}

export default Login