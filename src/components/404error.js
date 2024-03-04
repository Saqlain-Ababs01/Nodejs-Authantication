import React from 'react';
import { NavLink } from 'react-router-dom';
import Footer from './footer';

const error = () => {
  return (
    <>
        <div className='errorpage'>
            <div className='error-page-contents'>
                <div className='error-heading'>
                    <h1>page not found</h1></div>
                    <div className='erro-button'>
                    <NavLink to="/" className='erro-button'>home page</NavLink>
                </div>
            </div>
            <Footer/>
        </div>
    </>
  )
}

export default error;
