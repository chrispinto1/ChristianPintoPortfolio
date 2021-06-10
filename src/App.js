import { useRef, useState } from 'react'
import './App.css';
import Navbar from './components/Navbar'

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
    </div>
  );
}

export default App;
