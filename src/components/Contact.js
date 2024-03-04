import React, { useEffect, useState } from 'react';
import { MdPhoneAndroid } from "react-icons/md";
import { AiTwotoneMail } from "react-icons/ai";
import { LiaAddressCard } from "react-icons/lia";
import Footer from './footer';

const Contact = () => {

  const [userData, setUserData] = useState({name:"", email:"", phone:"", message:""});

  const callContact = async()=>{
  try{
       const res = await fetch('/getdata', {
        method: "GET",
        headers : {
          "Content-Type": "application/json",
        },
       })
       const data = await res.json();
       setUserData({...userData ,  name:data.name , email:data.email , phone:data.phone});
       console.log("this is user data", userData);
       if(!res.status===200){
        const err = new Error(res.error);
        throw err;
       }
  }catch(err){
    console.log("call about page error = ", err);
  }
};
  useEffect(()=>{
    callContact()
  }, [])

  const handleInput = (e)=>{
       const name = e.target.name;
       const value = e.target.value;
       setUserData({...userData, [name]:value})    
  }
  const submitInput = async(e)=>{
         e.preventDefault();
         const {name, email, phone, message} = userData;
         const res = await fetch("/contact", {
          method : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name, email, phone, message
          })
         });
         const data = await res.json();
         console.log("this is user message", data)
         if(res.status===201){
          alert("message send")
          setUserData({
            ...userData, message: ""
        });
         }
         else{
          console.log("data not sent")
          alert("plz write a message")
         }
  }

  return (
  <>
         <div className='contact-page'>
         <div className='contact-page-details'>
          <div className='contact-details'>
            <div className='c-detail'>
            <div className='icon'>
            <MdPhoneAndroid /> </div>
            <div className='u-detail'> 
            <p> Phone <br />{userData.phone}</p>
            </div>
            </div>
            <div className='c-detail'>
            <div className='icon'>
            <AiTwotoneMail /></div> 
            <div className='u-detail'> 
            <p> Email <br />{userData.email}</p>
            </div>
            </div>
            <div className='c-detail'>
            <div className='icon'>
            <LiaAddressCard /> </div> 
            <div className='u-detail'> 
            <p> Address <br /> ISB</p>
            </div>
            </div>
          </div>
          <form method='POST' id="feedback-form">
          <div className='feedback'>
          <div className='feedback-details'>
          <div className='f-heading'>
            <h3>Get in touch</h3>
            </div>
            <div className='u-feedback'>
            <div> <input type="text"  placeholder="Your Name" name='name'  value={userData.name} onChange={handleInput}  /></div>
             <div><input type="text" placeholder="Your Email" name='email' value={userData.email} onChange={handleInput} /></div> 
             <div> <input type="text" placeholder="Your Phone Number" name="phone" value={userData.phone} onChange={handleInput}  /></div>
              </div>
            <div className='text-area'>
              <textarea name="message" id="user" value={userData.message} onChange={handleInput}></textarea></div>
              <button className='f-button' onClick={submitInput}>Submit</button>
            </div>
          </div>
          </form>
          </div>
          <Footer/>
         </div>
         </> 
  )
}

export default Contact
