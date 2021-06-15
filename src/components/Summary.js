import MainImage from '../images/myself.png'

const Summary = () => {

    return(
        <div className="summary">
            <img src={MainImage} className="self-image"/>
            <h1><i>Full Stack Developer | Founder</i></h1>
            <p className="description">Welcome to my porfolio! My name is Christian Pinto. I'm a full stack developer and also the founder of <a href="https://www.piriji.com">Piriji</a>. I love programming, electronics and creating new things! When I'm not programming, the slideshow in the background displays a few of my many hobbies that I have which are nature, concerts, and biking!</p>
        </div>
    )
}

export default Summary