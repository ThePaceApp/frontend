import React, { useState,useRef,useEffect } from 'react'
import { Link, NavLink, Navigate, Outlet } from 'react-router-dom'
import axios from "../../../api/Axios"

const REGISTER_URL ='/signup'
const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const Number_REGEX = /^(\+234|234|0)(701|702|703|704|705|706|707|708|709|802|803|804|805|806|807|808|809|810|811|812|813|814|815|816|817|818|819|909|908|901|902|903|904|905|906|907|919|918|911|912|913|914|915|916|917)([0-9]{7})$/


const Register = () => {
  const userRef =useRef();
  const errRef = useRef();

  

  const [ username, setUsername] = useState('');
  const [ validusername, setValidUsername] = useState(false);
  const [ userFocus, setUserFocus] = useState(false);


  const [ phoneNumber, setPhoneNumber] = useState( '');
  const [ validphoneNumber, setValidPhoneNumber] = useState(false);
  const [ phoneFocus, setPhoneFocus] = useState(false);

  const [ password, setPassword] = useState('');
  const [ validPassword, setValidPassword] = useState(false);
  const [ passFocus, setPassFocus] = useState(false);

  const [ confirmPassword, setConfirmPassword] = useState('');
  const [ validConfirmPassword, setValidConfirmPassword] = useState(false);
  const [ confirmPasswordFocus, setConfirmPasswordFocus] = useState(false);



  const [errMsg, setErrMsg] = useState('');
  const [sucess, setSucess] = useState(false)

  useEffect(()=>{
    userRef.current.focus();
  }, [])

  useEffect(()=>{
    setValidUsername( USER_REGEX.test(username));
    console.log(username);
  },[username])

  useEffect(()=>{
    setValidPhoneNumber( Number_REGEX.test(phoneNumber));
  },[phoneNumber])

  useEffect(()=>{
    setValidPassword(PWD_REGEX.test(password));
    console.log(password)
    setValidConfirmPassword (password === confirmPassword)
  },[password,confirmPassword])


   useEffect(()=>{
    setErrMsg('')
   },[username,phoneNumber,password,confirmPassword])

   const handleSubmit = async (e) => {
     e.preventDefault();

     const v1 = USER_REGEX.test(username);
     const v2 =PWD_REGEX.test(password);
     const v3 = Number_REGEX.test(phoneNumber);

     if(!v1 || !v2 || !v3){
      setErrMsg('Invalid Entry')
      return;
     }
     try{
        const response = await axios.post(REGISTER_URL,
          JSON.stringify ({username,phoneNumber,password,confirmPassword
          }), {
            headers: { 'Content-Type': 'application/json' },
            withCredentials:false
        }
        );
        console.log(response?.data);
        console.log(response?.accessToken);
        console.log(JSON.stringify(response))
        setSucess(true);
    
        
        setUsername('');
        setPassword('');
        setPhoneNumber('')
        setConfirmPassword('');
    } catch (err) {
        if (!err?.response) {
            setErrMsg('Server Error');
        } else if (err.response.status === 409) {
            setErrMsg('Username already exist');
        } else {
            setErrMsg('Registration Failed')
        }
        errRef.current.focus();
        console.log("Error object:", err);

     }
    }
  
  return (
    <div>
    {
      sucess ? <Navigate to="/User/Login"/>  :(
    <div className='loginContainer'>
        <div className='loginDet'> 
          <div className="loginform">
          <p ref={errRef} className={errMsg? 'errmsg' : "offscreen"} aria-live='assertive'>{errMsg}</p>
          <div className="loglinks">
          <div className='nin'>
            <h1 className="nins">Register here.</h1>
          </div>
          <div className="loglink">
            <NavLink to ='/User/Login' 
            className='bigLink'
            >Sign In</NavLink>
            <NavLink to='/User/Register'
            className='bigLink'
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "bold",
                color: isPending ? "red" : "#FFFF" ,
                backgroundColor:"isActive" ? "#16955C": "",
              };
            }}
            >Sign Up</NavLink>
          </div>  
          </div>
          <form className="formks" onSubmit={handleSubmit} >
          <div className="formk">
              <div className='box'>
                <label htmlFor="">Username</label>
                <input type="text" placeholder='Username'
                  label="Username"
                  id="username"
                  ref={userRef}
                  autoComplete='off' 
                  onChange={(e)=> setUsername(e.target.value)}
                  aria-invalid={validusername ? "false": "true"}
                  aria-describedby='uidnote'
                  onFocus={()=>setUserFocus(true)}
                  onBlur={()=>setUserFocus(false)}
                />
                <p style={{width:"100%",wordBreak:"break-word",lineHeight:"25px",color:"red"}}
                id="username" 
                className={userFocus && 
                  username && 
                  !validusername ?
                  "instrutions":
                  "offscreen"}  
              >
              4 to 24 characters. <br/>
              Must begin with a letter. <br/>
              Letters, numbers, underscores,hyphens allowed.
              </p>
              </div>
              <div className='box'>
              <label htmlFor="">Phone Number</label>
              <input type="string" 
                  placeholder='Phone Number'
                id="PhoneNumber"
                required
                aria-invalid ={validphoneNumber ? "false": "true"}
                aria-describedby='phonenumbernote'
                onFocus={()=> setPhoneFocus(true)}
                onBlur={()=>setPhoneFocus(true)}
                onChange={e=> setPhoneNumber(e.target.value)}
                />
                <p style={{width:"100%",wordBreak:"break-word",lineHeight:"25px",color:"red"}}
                id="PhoneNumber" 
                className={phoneFocus && 
                  phoneNumber && 
                  !validphoneNumber ?
                  "instrutions":
                  "offscreen"}  
              >
              Invalid Number
              </p>
              </div>
              <div className='box'>
              <label htmlFor="">Password</label>
              <input type="text" id="Password"
              placeholder='Enter your password'
              aria-invalid={validPassword ? "false":"true"}
             aria-describedby='passwordnote'
             onFocus={()=>setPassFocus(true)}
             onBlur={() => setPassFocus(false)}
             onChange={e=> setPassword(e.target.value)}  />
             <p style={{width:"100%",wordBreak:"break-word",lineHeight:"25px",color:"red"}}
                 id="password" 
                 className={passFocus && 
                   password && 
                   !validPassword ?
                   "instrutions":
                   "offscreen"}  
               >
                   Minimum of eigth(8)Characters
               </p>
              </div>
              <div className='box'>
              <label htmlFor=""> Confirm Password</label>
              <input type="text" id="Confirmnote"
              placeholder='Confirm  your password'
              required
              aria-invalid={validConfirmPassword ? "false":"true"}
              aria-describedby='confirmpasswordnote'
              onFocus={()=>setConfirmPasswordFocus(true)}
              onBlur={() => setConfirmPasswordFocus(false)}
              onChange={e=> setConfirmPassword(e.target.value)} 
              />
              <p style={{width:"100%",wordBreak:"break-word",lineHeight:"25px",color:"red"}}
                  id="confirmnote" 
                  className={confirmPasswordFocus && 
                    confirmPassword && 
                    !validConfirmPassword ?
                    "instrutions":
                    "offscreen"}  
                >
                    Password Does not Match
                </p>
              </div>
            </div>
            <Link to ='/User/Login' className="fgt">Already have an account?</Link>
            <button className='btnlogs' disabled={!validusername || !validPassword || !validphoneNumber || !validConfirmPassword ? true : false
            
            }>Sign in</button>
            </form>
{/*             <div style={{display:'flex',justifyContent:'center', alignItems:'center',width:"95%"}}>
              <div className="lin"></div>
              <div className="lis" style={{margin:"0px 5px"}}>or</div>
              <div className="lin"></div>
          </div> */}
        </div>
        </div>
      <Outlet/>
    </div>
    )}
    </div>
  )
}

export default Register
