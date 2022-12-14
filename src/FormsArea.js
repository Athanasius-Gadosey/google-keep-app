// jshint esversion:6
import { Fab, Paper, TextField } from '@mui/material';
import React from 'react';
import './FormsArea.css';
import AddIcon from '@mui/icons-material/Add';

function FormsArea() {
  return (
    <div className='forms'>
        <Paper className='forms__area'>
            <form action="">
                <TextField label='Title' fullWidth autoComplete='off'/>
                <TextField label='Content' multiline rows={4} fullWidth autoComplete='off'/>
                <Fab className='fab__icon'> <AddIcon /></Fab>
            </form>
        </Paper>
    </div>
  )
}

export default FormsArea