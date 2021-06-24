import { useState } from "react"

const ImageSlideShow = ({images}) => {

    const [currentIndex, setCurrentIndex] = useState(0)

    const displayImage = () => {
        return <img src={images[currentIndex]} className="project-image" alt="project-img"/>
    }


    return (
        <div className="slideshow-container">
            {
                currentIndex !== 0 &&
                    <button className="prev" onClick={() => setCurrentIndex(currentIndex - 1)}></button>
            }
            {displayImage()}
            {
                currentIndex !== images.length - 1 &&
                    <button className="next" onClick={() => setCurrentIndex(currentIndex + 1)}></button>
            }
        </div>
    )
}

export default ImageSlideShow