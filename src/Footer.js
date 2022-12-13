// jshint esversion:6
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
        <p className='footer__page'>Copyright &copy; {new Date().getFullYear()} reserved by A.J.K.T.G </p>
    </div>
  )
}

export default Footer