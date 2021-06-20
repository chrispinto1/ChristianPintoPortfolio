import { useRef } from 'react'
import './App.css';
import Navbar from './components/Navbar'
import About from "./containers/About";
import Skills from './containers/Skills';
import Contact from './components/Contact';

function App() {

  const dropdownRef = useRef(null);

  const removeDropdown = (event) => {
    if(dropdownRef.current.style.display != 'none' && (event.target.classList[0] !== 'white' && event.target.classList[0] !== 'black')){
      dropdownRef.current.style.maxHeight = '0'
      const closeDropdown = setTimeout(function(){
        dropdownRef.current.style.display = 'none'
      }, 1000)
    }
  }
  return (
    <div className="App" onClick={removeDropdown}>
      <Navbar dropdownRef={dropdownRef}/>
      <About />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
