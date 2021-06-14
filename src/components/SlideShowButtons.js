const SlideShowButtons = ({pause, setPause, play, setPlay, slideShow, setSlideShow}) => {

    const playSlide = () => {
        setPlay(true)
        setPause(false)
    }

    const pauseSlide = () => {
        setPlay(false)
        setPause(true)
    }
    
    return(
        <div className="stop-pause-buttons">
            <button onClick={playSlide} disabled={play}></button>
            <button onClick={pauseSlide} disabled={pause}></button>
        </div>
    )
}

export default SlideShowButtons