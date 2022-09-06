import * as React from 'react'
import '../../assets/css/global.css'
import '../../assets/css/bootstrap.css'
import { navigate } from 'gatsby'
import { useState } from 'react'

const Index = () => {
  const [password, setPassword] = useState()
  const [username, setUsername] = useState()

  const login = (event) => {
    event.preventDefault()
    if (password.length < 5) {
      alert('tidak boleh lebih dari 5')
      return
    }
    navigate('/dashboard/user')
  }

  return <div style={{
    fontSize: '15px', color: 'blue'
  }} className="container center" >
    <div className="card" style={{ width: '20rem' }}>
      <div className="card-body">
        <div className="card-title">
          <h2 style={{ textAlign: 'center' }}>Login</h2>
          <div className='underline-title'></div>
        </div>
        <form className='form' onSubmit={login}>
          {/* {password} {username} */}
          <label htmlFor='name' className='mb-1' >name</label>
          <input
            onChange={(event) => {
              console.log(event)
              setUsername(event.target.value)
            }}
            value={username}
            type="text" required className='form-control mb-2' id="name" name="name" placeholder='Your name...'></input>
          <label htmlFor='Password' className='mb-1'>Password</label>
          <input onChange={(event) => {
            console.log(event)
            setPassword(event.target.value)
          }} type="password" required className='form-control mb-3' id="Password" name="Password" placeholder='Your password...'></input>
          <button className='btn btn-primary w-100' type='submite'>Login</button>
        </form>
      </div>
    </div>
  </div >

}

export default Index