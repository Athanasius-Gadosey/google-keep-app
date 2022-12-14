//jshint esversion:6
import './App.css';
import Footer from './Footer';
import FormsArea from './FormsArea';
import Header from './Header';
import Note from './Note';


function App() {
  return (
    <div className="app">
      <Header />
    {/* formsArea */}
      <FormsArea />
       {/* Note */}
       <Note />
       <Note />
       <Note />

      {/* footer */}
      <Footer />
    </div>
  );
}

export default App;
