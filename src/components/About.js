import React, { useEffect, useState } from 'react';
import MYphoto from "../images/myphoto.jpg";
import Footer from "./footer"
import {useNavigate} from "react-router-dom";


const About = () => {

  const navigate = useNavigate();
  const [userData, setUserData] = useState("");

  const callAboutPage = async()=>{
  try{
       const res = await fetch('/about', {
        method: "GET",
        headers : {
          Accept : "application/json",
          "Content-Type": "application/json",
        },
         credentials : "include"
       })
       const data = await res.json();
       console.log("this is user's data", data);
       setUserData(data);
       if(!res.status===200){
        const err = new Error(res.error);
        throw err;
       }
  }catch(err){
    console.log("call about page error = ", err);
    navigate("/login")
  }
};

  useEffect(()=>{
    callAboutPage()
  }, [])
  return (
    <>
          <div className='about-page'>
          <div className='about-page-details'>
            <div className='about-details'>
            <form method='GET'>
               <div className='row-one'>
               <div className='a-pic'>
                  <img src={MYphoto} alt="mypic" />
                  </div>
                  <div className='a-headings'>
                        <h3>{userData.name}</h3>
                        <h4>{userData.work}</h4>
                        <h5>ranking 10/10</h5>
                  </div>
                  <div className='a-edit'>
                    <button className='edit-profile'>edit profile</button>
                  </div>
               </div>
               <div className='center-row'>
                <div className='c-about'>
                  <h2>about</h2>
                </div>
                <div className='c-timeline'> <h2>timeline</h2></div>
               </div>
               <div className='row-two'>
                <div className='personal-details'>
                  <h4>Software engineer</h4>
                  <h4>web developer</h4>
                  <h4>free lancer</h4>
                  <h4>instagram</h4>
                </div>
                <div className='user-details'>
                  <h4>user id</h4>
                  <h4>name</h4>
                  <h4>email</h4>
                  <h4>phone</h4>
                  <h4>profession</h4>
                </div>
                <div className='personal-value'>
                  <h4>{userData._id}</h4>
                  <h4>{userData.name}</h4>
                  <h4>{userData.email}</h4>
                  <h4>{userData.phone}</h4>
                  <h4>{userData.work}</h4>
                </div>
               </div>
               </form>
            </div>
          </div>
          <Footer/>
          </div>
    </>
  )
}

export default About
