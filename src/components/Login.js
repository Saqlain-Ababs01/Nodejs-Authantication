import React, { useState } from 'react';
import { IoLogInSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import Footer from './footer';
import { RiLockPasswordFill } from "react-icons/ri";
import loginImage from "../images/loginImage.webp"
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const navigate  = useNavigate();
  const [email , setEmail]= useState("");
  const [password, setPassword] = useState("");

  const setLogin =  async(e)=>{
       e.preventDefault();
     
       const res = await fetch("/signin",{
        method : "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
           email,password 
        })
       });
       const data = await res.json();
       console.log(data);
       if(res.status === 400 || !data){
        window.alert("invalid registration");
        console.log("invalid registration");
   }else{
    window.alert("registration sucessfull");
    console.log("registration sucessfull");

    navigate("/",{replace: true})
   }
  }
  
  return (
    <>
         
           <div className='login-page'>
           <div className='login-page-details'>
           <div className='login'>
              <div className='login-heading'>
                <h3>Log IN <IoLogInSharp /></h3>
              </div>
              <div className='log-dev'>
              <div className='login-details'>
                <form action="">
                <label className='login-detail'> <MdEmail /> <input type="text" placeholder='Enter Email' name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/></label><br></br>
                <label  className='login-detail'> <RiLockPasswordFill /> <input type="text" placeholder='Enter Password'  name="password" value={password} onChange={(e)=>setPassword(e.target.value)}/></label><br></br>
                <div className='signin'>
                <button className='sign-in-button' onClick={setLogin}>Sign in</button></div>
                </form>
              </div>
              <div className='log-image'>
                <img src={loginImage} alt="" />
              </div>
              </div>
           </div>
           </div>
           <Footer/>
           </div>
    </>
  )
}

export default Login
