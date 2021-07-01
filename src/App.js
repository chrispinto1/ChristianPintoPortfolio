import { useEffect, useRef, useState } from 'react'
import './App.css';
import Navbar from './components/Navbar'
import About from "./containers/About";
import Skills from './containers/Skills';
import Contact from './containers/Contact';
import Projects from './containers/Projects'
import Resume from './containers/Resume'

function App() {

  const dropdownRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);
  const [viewResume, setViewResume] = useState(false)
  const [loadSection, setLoadSection] = useState({
    projects: false,
    skills: false,
    contact: false
  })

  useEffect(() => {
      const options = {
        threshold: new Array(101).fill(0).map((v, i) => i * 0.01),
      }

      const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
           if(entry.isIntersecting && !loadSection[entry.target.dataset.name]){
              console.log('observer')
              entry.target.style.opacity = 1
              setLoadSection({...loadSection, [entry.target.dataset.name]: true})
           }
        })
      }, options)

      const elements = [projectsRef.current, skillsRef.current, contactRef.current]
      elements.forEach(element => {
        observer.observe(element)
      })

      return () => {
        elements.forEach(element => {
          observer.disconnect(element)
        })
      }
  })

  const removeDropdown = (event) => {
    if(dropdownRef.current.style.display !== 'none' && (event.target.classList[0] !== 'white' && event.target.classList[0] !== 'black')){
      dropdownRef.current.style.maxHeight = '0'
      setTimeout(function(){
        dropdownRef.current.style.display = 'none'
      }, 1000)
    }
  }

  return (
    <div className="App" onClick={removeDropdown}>
      <Navbar dropdownRef={dropdownRef} setViewResume={setViewResume}/>
      <About />
      <Projects projectsRef={projectsRef} load={loadSection.projects}/>
      <Skills skillsRef={skillsRef} load={loadSection.skills}/>
      <Contact contactRef={contactRef} load={loadSection.contact}/>
      {
        viewResume && 
          <Resume setViewResume={setViewResume}/>
      }
    </div>
  );
}

export default App;
