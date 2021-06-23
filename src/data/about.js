import Nature from '../images/about/nature.jpg'
import Graspop from '../images/about/graspop.png'
import Biking from '../images/about/biking.jpg'

import Ecuador from '../images/about/ecuador-flag.jpeg'
import Chile from '../images/about/chilean-flag.jpeg'
import Switzerland from '../images/about/switzerland-flag.png'

import Slayer from '../images/about/slayer.png'
import Gwar from '../images/about/gwar.jpeg'
import DropkickMurphys from '../images/about/dropkickmurphys.jpeg'


const aboutData = [
    {
        text: `My name is Christian Pinto and I love programming, electronics and creating new things! When I'm not programming, a few of my many hobbies are exploring nature, going to concerts, and biking!`,
        images: [Nature, Graspop, Biking],
        altText: ['Nature', 'Graspop Metal Meeting', 'Biking']
    },
    {
        text: `One of the most exciting things I love to do is travel! I get to experience different cultures and know the people. Here are a few of the many countries I've visited which includes my home country Ecuador!`,
        images: [Ecuador, Chile, Switzerland],
        altText: ['Ecuador', 'Chile', 'Switzerland']
    },
    {
        text: 'Music is a big part of my life! I love all genres of music such as blues, hip-hop, rock, heavy metal, bachata and jazz. Out oof all the genres, rock and heavy metal hold a special place in my heart. Below are smoe of my favorite bands!',
        images: [Slayer, Gwar, DropkickMurphys],
        altText: ['Slayer', 'Gwar', 'Dropkick Murphys']
    }
]

export default aboutData