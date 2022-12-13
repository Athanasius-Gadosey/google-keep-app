//jshint esversion:6
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';

function App() {
  return (
    <div className="app">
      <Header />

       {/* Note */}
       <Note />
       
      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
