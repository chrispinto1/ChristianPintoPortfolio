import { useEffect, useState } from "react"
import MessagePopup from "./MessagePopup"

const SlideShowButtons = ({pause, setPause, play, setPlay, slideShow, setSlideShow}) => {

    const [popup, setPopup] = useState(false)
    const [message , setMessage] = useState('')

    const messageStyles = {
        bottom: '25px',
        color: 'rgb(141, 245, 66)',
        left: '50%',
        marginLeft: pause ? '-37px' : '-27px'
    }

    useEffect(function(){
        if((pause || play) && popup){
            const popup = document.querySelector('#pause')
            popup.classList.add('popup')
            setTimeout(function(){
                popup.classList.add('fade-popup')
                setTimeout(function(){
                    setPopup(false)
                }, 1500)
            }, 2000)
        }
    }, [pause, play, popup])

    const playSlide = () => {
        setPlay(true)
        setPause(false)
        setPopup(true)
        setMessage('Play')
    }

    const pauseSlide = () => {
        setPlay(false)
        setPause(true)
        setPopup(true)
        setMessage('Paused')
    }
    
    return(
        <div className="stop-pause-buttons">
            <button aria-label="play" onClick={playSlide} disabled={play}></button>
            {
                popup &&
                    <MessagePopup id="pause" styles={messageStyles} message={message} htmlTag={"<span class='checkmark'>&#10003</span>"}/>
            }
            <button aria-label="pause" onClick={pauseSlide} disabled={pause}></button>
        </div>
    )
}

export default SlideShowButtons