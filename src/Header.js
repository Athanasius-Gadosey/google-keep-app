// jshint esversion:6
import React from 'react';
import './Header.css';
import { Paper } from '@mui/material';

function Header() {
  return (
    <div className='header'>
        <Paper className='header__paper' elevation={3}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGZGd0q4gsAlbWOYZgAkD1dmJH9InfbYqrRQMQK5-XVCtocj7Bk_ny6uMIClJslXW5M34&usqp=CAU" alt="sLogo" />
            <h1 className='header__name'>React App</h1>
        </Paper>
    </div>
  )
}

export default Header