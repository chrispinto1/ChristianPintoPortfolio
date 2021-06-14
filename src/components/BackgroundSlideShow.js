import { useEffect, useRef, useState } from 'react'
import hobbies from '../utils/Slideshow'
import SlideShowButtons from './SlideShowButtons'

const BackgroundSlideShow = () => {

    const backgroundImage = useRef(null)
    const nextImage = useRef(null)
    const [pause, setPause] = useState(false)
    const [play , setPlay] = useState(true)
    const [interval, setSlideInterval] = useState(null)
    const [currentImageIndex, setCurrentImageIndex] = useState(1)
    const [backgroundInterval ,setBackgroundImageInterval] = useState(null)

    const switchImage = (i) => {
        backgroundImage.current.classList.add('fade-out')
        setTimeout(function(){
            backgroundImage.current.src = hobbies[i].image
            nextImage.current.classList.remove('fade-in')
            if(i+1 > hobbies.length - 1)
                nextImage.current.src = hobbies[0].image
            else{
                nextImage.current.src = hobbies[i + 1].image
            }
            backgroundImage.current.classList.remove('fade-out')
        }, 1800)
    }

    const switchBackgroundImage = () => {
        nextImage.current.classList.add('fade-in')
    }

    useEffect(() => {
        if(!pause && !interval){
            let index = currentImageIndex
            const imageTimeout = setInterval(function(){
                switchImage(index)
                index++
                if(index > hobbies.length - 1){
                    index = 0
                }
                setSlideInterval(imageTimeout)
                setCurrentImageIndex(index)
            }, 10000)

            const backgroundImageInterval = setInterval(function(){
                switchBackgroundImage()
                setBackgroundImageInterval(backgroundImageInterval)
            },10000)

        }

        if(pause){
            clearInterval(interval)
            clearInterval(backgroundInterval)
            setSlideInterval(null)
            setBackgroundImageInterval(null)
        }
    }, [pause, play, currentImageIndex])

    return(
        <picture>
            <SlideShowButtons pause={pause} setPause={setPause} play={play} setPlay={setPlay}/>
            <img ref={backgroundImage} src={hobbies[0].image} style={{width: '100vw', height: 'calc(100vh - 50px)', marginTop: '50px', zIndex: 0}}/>
            <img ref={nextImage} src={hobbies[1].image} style={{width: '100vw', height: 'calc(100vh - 50px)', marginTop: '50px', opacity: 0, top: 0, left: 0, position: 'absolute', zIndex: 99}} />
        </picture>
    )
}

export default BackgroundSlideShow