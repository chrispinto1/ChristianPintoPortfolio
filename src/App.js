import { useRef, useState } from 'react'
import './App.css';
import Navbar from './components/Navbar'

function App() {

  const dropdownRef = useRef(null);
  const [clickedOpen, setClickedOpen] = useState(false)

  const removeDropdown = (event) => {
    if(dropdownRef.current.style.display != 'none' && (event.target.classList[0] !== 'white' && event.target.classList[0] !== 'black')){
      dropdownRef.current.style.display = 'none'
    }
  }
  return (
    <div className="App" onClick={removeDropdown}>
      <Navbar dropdownRef={dropdownRef} setClickedOpen={setClickedOpen} clickedOpen={clickedOpen}/>
    </div>
  );
}

export default App;
