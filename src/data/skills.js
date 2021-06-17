import Javascript from '../images/skills/javascript.png'
import HTML from '../images/skills/html.png'
import Python from '../images/skills/python.png'
import Ruby from '../images/skills/ruby.png'
import CSS from '../images/skills/css.png'

const languages = [
    {
        name: 'Javascript',
        color: 'rgb(245,222,25)',
        image: Javascript
    },
    {
        name: 'Python',
        color: 'rgb(52,122,180)',
        image: Python
    },
    {
        name: 'Ruby',
        color: 'rgb(153, 18, 11)',
        image: Ruby
    },
    {
        name: 'HTML5',
        color: 'rgb(241,102,42)',
        image: HTML
    },
    {
        name: 'CSS',
        color: 'rgb(3,155,229)',
        image: CSS
    },
]

const frameworks = [
    {
        name: 'React'
    },
    {
        name: 'Django'
    },
    {
        name: 'Ruby on Rails'
    },
    {
        name: 'NodeJS'
    },
    {
        name: 'JQuery'
    }
]

const databases = [
    {
        name: 'Postgresql'
    },
    {
        name: 'Mysql'
    },
    {
        name: 'MongoDB'
    },
]

const misc = [
    {
        name: 'Photoshop'
    },
    {
        name: 'Arduino'
    },
    {
        name: 'Raspberry PI'
    },
]

export default {
    languages,
    frameworks,
    databases,
    misc
}