
import './App.css';
import Hero from './Components/Navbar/Hero/Hero';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Project from"./Components/Project/Project";
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
