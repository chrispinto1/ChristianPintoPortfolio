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
    const [interval, setSlideInterval] = useState(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(1)
    const [backgroundInterval ,setBackgroundImageInterval] = useState(null)
    const [slideText, setSlideText] = useState()

    // const switchImage = (i) => {
    //     backgroundImage.current.classList.add('fade-out')
    //     setTimeout(function(){
    //         backgroundImage.current.src = hobbies[i].image
    //         nextImage.current.classList.remove('fade-in')
    //         if(i+1 > hobbies.length - 1)
    //             nextImage.current.src = hobbies[0].image
    //         else{
    //             nextImage.current.src = hobbies[i + 1].image
    //         }
    //         backgroundImage.current.classList.remove('fade-out')
    //     }, 1800)
    // }

    // const switchBackgroundImage = () => {
    //     nextImage.current.classList.add('fade-in')
    // }

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
        

    //     if(!pause && !interval){
    //         let index = currentImageIndex
    //         const imageTimeout = setInterval(function(){
    //             switchImage(index)
    //             index++
    //             if(index > hobbies.length - 1){
    //                 index = 0
    //             }
    //             setSlideInterval(imageTimeout)
    //             setCurrentImageIndex(index)
    //         }, 10000)

    //         const backgroundImageInterval = setInterval(function(){
    //             switchBackgroundImage()
    //             setBackgroundImageInterval(backgroundImageInterval)
    //         },10000)
    //     }

    //     if(pause){
    //         clearInterval(interval)
    //         clearInterval(backgroundInterval)
    //         setSlideInterval(null)
    //         setBackgroundImageInterval(null)
    //     }
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
            {/* <h1>hello</h1> */}
            {
            /* <img ref={backgroundImage} src={hobbies[0].image} style={{width: '100vw', height: 'calc(100vh - 50px)', marginTop: '50px', zIndex: 0}}/>
            <img ref={nextImage} src={hobbies[1].image} style={{width: '100vw', height: 'calc(100vh - 50px)', marginTop: '50px', opacity: 0, top: 0, left: 0, position: 'absolute', zIndex: 99}} /> 
            
            
            */}
        </div>
    )
}

export default AboutMeSlideShow