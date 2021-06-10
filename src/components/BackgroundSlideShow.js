import Nature from '../images/nature.jpg'
import Graspop from '../images/graspop.png'
import hobbies from '../utils/Slideshow'
import { useEffect, useRef } from 'react'

const BackgroundSlideShow = () => {

    const backgroundImage = useRef(null)

    useEffect(() => {
        let i = 0
        setInterval(function(){
            backgroundImage.current.src = hobbies[i].image
            i++
            if(i === hobbies.length){
                i = 0
            }
        },5000)
                
       
    })

    return(
        <picture>
            <img ref={backgroundImage} src={Nature} style={{width: '100vw', height: 'calc(100vh - 50px)', marginTop: '50px'}}/>
        </picture>
    )
}

export default BackgroundSlideShow