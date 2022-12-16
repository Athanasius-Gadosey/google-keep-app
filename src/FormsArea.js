// jshint esversion:6
import { Fab, Paper, TextField } from '@mui/material';
import React, { useState } from 'react';
import './FormsArea.css';
import AddIcon from '@mui/icons-material/Add';

function FormsArea({addNote}) {
    const [note, setNote] = useState({
        title: '',
        content: '',
    });
    function clickHandler(){
        addNote(note);
        setNote({
            title: '',
            content: '',
        });
    }

    function changeHandler(event){
        const {name, value} = event.target
        setNote(preValues =>{
            return{
                ...preValues,
                [name]: value, 
            }
        })
    }

  return (
    <div className='forms'>
        <Paper className='forms__area'>
            <form action="">
                <TextField onChange={changeHandler} name='title' value={note.title} label='Title' fullWidth autoComplete='off'/>
                <TextField onChange={changeHandler} name='content' value={note.content} label='Content' multiline rows={4} fullWidth autoComplete='off'/>
                <Fab onClick={clickHandler} className='fab__icon'> <AddIcon /></Fab>
            </form>
        </Paper>
    </div>
  )
}

export default FormsArea