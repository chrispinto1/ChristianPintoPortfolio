import { useEffect, useRef, useState } from 'react'
import aboutMe from '../data/about'
import SlideShowButtons from './SlideShowButtons'
import MainImage from '../images/about/myself.png'

const AboutMeSlideShow = () => {

    const firstImageRef = useRef(null)
    const secondImageRef = useRef(null)
    const thirdImageRef = useRef(null)
    const selfImageRef = useRef(null)
    const headingRef = useRef(null)
    const descriptionRef = useRef(null)
    const [currentIndex, setCurrentIndex] = useState(0)
    const [stopHeader, setStopHeader] = useState(false)


    const [pause, setPause] = useState(false)
    const [play , setPlay] = useState(true)

    useEffect(() => {
        showInfo()
        if(!pause){
            setTimeout(function(){
                transition()
                setTimeout(function(){
                    if(currentIndex === aboutMe.length - 1){
                        setCurrentIndex(0)
                    }else{
                        setCurrentIndex(currentIndex+1)
                    }
                    setStopHeader(true)
                },2500)
            }, 5000)
        }
    })

    const transition = () => {
        firstImageRef.current.classList.remove('show-translate')
        secondImageRef.current.classList.remove('show-two')
        thirdImageRef.current.classList.remove('show-translate')
        descriptionRef.current.classList.remove('show-translate')
    }

    const showInfo = () => {
        if(!stopHeader){
            selfImageRef.current.classList.add('show-translate')
            headingRef.current.classList.add('show-translate')
        }
        descriptionRef.current.classList.add('show-translate')
        setTimeout(function(){
            firstImageRef.current.classList.add('show-translate')
            secondImageRef.current.classList.add('show-two')
            thirdImageRef.current.classList.add('show-translate')
        },2000)
    }
    return(
        <div className="about-container">
            <div className="slide-content">
                <div className="description-container">
                    <img ref={selfImageRef} src={MainImage} className="self-image hide-self-image" alt="christian-pinto"/>
                    <h1 ref={headingRef} className="hide-headline"><i>Full Stack Developer | Founder</i></h1>
                    <p ref={descriptionRef} className="description hide-description">{aboutMe[currentIndex].text}</p>
                </div>
                <div className="image-container">
                    <img ref={firstImageRef} className="hide-one" src={aboutMe[currentIndex].images[0]} alt={aboutMe[currentIndex].altText[0]}/>
                    <img ref={secondImageRef} className="hide-two" src={aboutMe[currentIndex].images[1]} alt={aboutMe[currentIndex].altText[1]}/>
                    <img ref={thirdImageRef} className="hide-three" src={aboutMe[currentIndex].images[2]} alt={aboutMe[currentIndex].altText[2]}/>
                </div>
            </div>
            <SlideShowButtons pause={pause} setPause={setPause} play={play} setPlay={setPlay}/>
        </div>
    )
}

export default AboutMeSlideShow