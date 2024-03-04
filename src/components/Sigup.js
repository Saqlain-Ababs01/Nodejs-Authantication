import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosContact } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import signUpImage from "../images/signupImage.webp";
import { SiGnuprivacyguard } from "react-icons/si";
import Footer from './footer';

const Sigup = () => {

  const [user, setUser]= useState({name:"", email:"", phone:"", work:"", password:"", cpassword:""});
  let name ,value;
  const navigate = useNavigate();

  const handleInputs =(e)=>{
    name = e.target.name;
    value = e.target.value;
    setUser({...user , [name]:value});
  }
    console.log(user);

  const postData =async(e)=>{

       e.preventDefault();
       const {name, email, phone, work, password, cpassword} = user;
       const res = await fetch("/registration",{
        method : "POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name, email, phone, work, password, cpassword 
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

        navigate("/login",{replace: true})
       }

  }
  return (
    <>
    <div className='registration-page'>
    <div className='registration-page-details'>
          <div className='registration-form'>
            <div  className='signup-form'>
              <div className='heading'>
                <h3>Sign UP <SiGnuprivacyguard /></h3>
              </div>
              <div className='details'>
                <form method='POST'>
                <label> <IoIosContact /> <input type="text"  placeholder='Enter Full Name'  name="name"  value={user.name} onChange={handleInputs}/></label><br></br>
                <label> <MdEmail /> <input type="text" placeholder='Enter Email'  name="email"  value={user.email} onChange={handleInputs}/></label><br></br>
                <label> <MdOutlinePhone /> <input type="number" placeholder='Enter Phone Number'  name="phone"  value={user.phone} onChange={handleInputs}/></label><br></br>
                <label> <MdWork /> <input type="text" placeholder='Enter Profession'  name="work" value={user.work}  onChange={handleInputs}/></label><br></br>
                <label> <RiLockPasswordFill /> <input type="text" placeholder='Enter Password'   name="password" value={user.password}  onChange={handleInputs}/></label><br></br>
                <label> <RiLockPasswordFill /> <input type="text" placeholder='Enter Confirm Password'  name="cpassword" value={user.cpassword}  onChange={handleInputs}/></label><br></br>
                </form>
                <button className="Signup-button" type="submit"  onClick={postData}>Sign Up</button>
              </div>
            </div>
            <div className='singup-img'>
              <img src={signUpImage} alt="sigupimage" />
            </div>
          </div>
          </div>
          <Footer/>
    </div>
</>
  )
}

export default Sigup;
