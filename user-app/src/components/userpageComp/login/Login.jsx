import React, { useState } from 'react'
import { Link, NavLink, Navigate, Outlet } from 'react-router-dom'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './login.css'
import axios from 'axios';

const Login = () => {
  const [ username, setUsername] = useState('');
  const [ password, setPassword] = useState('');
  const [navigate, setNavigate] = useState(false)
  const submit = async e => {
    e.preventDefault();

    await axios.post("https://lime-clever-peacock.cyclic.app/api/v1/users/login",{
      username,
      password,
    })
    .then((res)=>localStorage.setItem("token", res.data.token))
      .catch((err) => console.error(err));
    setNavigate(true)
  }
  if (navigate){
    return <Navigate to="/Dashboard"/>
  }
  return (
    <div className='loginContainer'>
        <div className='loginDet'> 
          <div className="loginform">
          <div className="loglinks">
          <div>
            <h1 style={{color:"#16955C"}}>Welcome.</h1>
          </div>
          <div className="loglink">
            <NavLink to ='/User/Login'
            className='bigLink'
              style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "bold",
                color: isPending ? "red" : "#FFFf",
                backgroundColor:"isActive" ? "#16955C": "",
              };
            }}
            >Sign In</NavLink>
            <NavLink to='/User/Register'
            className='bigLink'
            >Sign Up</NavLink>
          </div>
          </div>
          <form action="" onSubmit={submit}>
          <Box
           sx={{
            width: '95%',
            maxWidth: '100%',
            }}
             > 
            <TextField fullWidth label="Username" id="Username"  onChange={e=> setUsername(e.target.value)} />
          </Box>
          <Box
           sx={{
            width: '95%',
            maxWidth: '100%',
            marginTop:'30px',
            marginBottom:"20px",
            }}
             >
            <TextField fullWidth label="Password" id="Password" onChange={e=> setPassword(e.target.value)}/>
            </Box>
              <Link to ='/User/ResetPassword' className="fgt">Forget password?</Link>
              <button className='btnlogs'>Sign in</button>
            </form>

        </div>
        </div>
      <Outlet/>
    </div>
  )
}

export default Login
