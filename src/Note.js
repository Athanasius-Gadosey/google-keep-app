// jshint esversion:6
import { Button, Paper } from '@mui/material';
import React from 'react';
import './Note.css';
import DeleteIcon from '@mui/icons-material/Delete';

function Note({title, content, id, delNote}) {
    function clickHandler(){
        delNote(id);
    }
    
  return (
    <div>
        <Paper className='paper__note'>
           <div>
            <h1>{title}</h1>
            <p>{content}</p>
           </div>
           <Button onClick={clickHandler} className='del'> <DeleteIcon/> </Button>
        </Paper>
    </div>
  )
}

export default Note