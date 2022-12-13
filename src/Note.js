// jshint esversion:6
import { Paper } from '@mui/material';
import React from 'react';
import './Note.css';

function Note() {
  return (
    <div>
        <Paper className='paper__note'>
            <h1>Title</h1>
            <p>Content</p>
        </Paper>
    </div>
  )
}

export default Note