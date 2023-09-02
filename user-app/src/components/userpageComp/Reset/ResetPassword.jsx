import { Box, TextField } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const ResetPassword = () => {
  return (
    <div>
    <div style={{marginBottom:"20px", color:"#16955C"}}>
            <h1>Forget Password.</h1>
          </div>
    <form action="">
    <Box
     sx={{
      width: '95%',
      maxWidth: '100%',
      marginBottom:"20px",
      }}
       > 
      <TextField  fullWidth label="Phone Number" id="Phone Number" />
    </Box>
    <Link to ='/User/Register' className="fgt" style={{display:"flex", alignItems:"center", justifyContent:"center"}}>Or create an account?</Link>
    <button className='btnlogs'>Reset Password</button>
    </form>
    </div>
  )
}

export default ResetPassword
