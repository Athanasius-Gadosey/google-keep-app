//jshint esversion:6
import { useState } from 'react';
import './App.css';
import Footer from './Footer';
import FormsArea from './FormsArea';
import Header from './Header';
import Note from './Note';


function App() {
  const [notes, setNotes] = useState([]);
  console.log(notes);

  function addNote(note){
    setNotes(preNotes => {
      return [...preNotes, note]
    })
  }
  function delNote(id) {
    setNotes(preNotes=>{
      return preNotes.filter((note, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="app">
      <Header />
    {/* formsArea */}
      <FormsArea addNote={addNote} />
       {/* Note */}
       {notes.map((note, index)=>(
        <Note id={index} delNote={delNote} title={note.title} content={note.content} />
       ))}
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
