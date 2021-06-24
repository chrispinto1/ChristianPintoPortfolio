import { useEffect, useRef, useState } from 'react'
import './App.css';
import Navbar from './components/Navbar'
import About from "./containers/About";
import Skills from './containers/Skills';
import Contact from './containers/Contact';
import Projects from './containers/Projects'

function App() {

  const dropdownRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const [loaded, setLoaded]= useState(false)
  const [loadSection, setLoadSection] = useState({
    projects: false,
    skills: false,
    contact: false
  })

  useEffect(() => {
    console.log(loadSection)
      const options = {
        threshold: 0.2,
      }
      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
           if(entry.isIntersecting){
             if(!loadSection[entry.target.dataset.name])
                setLoadSection({...loadSection, [entry.target.dataset.name]: true})
                observer.unobserve(entry.target)
           }else{
             return
           }
        })
      }, options)
  
      const elements = [projectsRef.current, skillsRef.current, contactRef.current]
      elements.forEach(element => {
        observer.observe(element)
      })
  }, [loadSection])

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
      <Projects projectsRef={projectsRef} load={loadSection.projects}/>
      <Skills skillsRef={skillsRef} load={loadSection.skills}/>
      <Contact contactRef={contactRef} load={loadSection.contact}/>
    </div>
  );
}

export default App;
