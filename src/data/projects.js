import images from '../data/images'

const webProjects = [
    {
        name: 'Piriji',
        builtWith: 'Ruby on Rails / Postgresql / React / CSS / AWS / React Native',
        link: 'https://www.piriji.com',
        thirdPartyAPIs: 'Mapbox / Paypal / Google Reverse Geocoding (Mobile App)',
        mobileLink: '',
        role: 'Founder / Full Stack Developer / Mobile Developer',
        description: 'Pirji is a web and mobile app that allows you to find bars that have happy hour specials. It is currently specific to NYC only at the moment with the outlook of expanding beyond NYC',
        images: images['piriji']
    },
    {
        name: 'Popshop',
        builtWith: 'Django / Python / Javascript / HTML / CSS / JQuery / Postgresql',
        link: 'https://www.popshop.com/',
        thirdPartyAPIs: 'Google Maps / Stripe / Plaid / Owl Carousel',
        role: 'Full Stack Developer',
        description: 'Popshop is an app that allows you to book retail spaces to have your own brick and motar store. We utilize google maps to display and recommend spaces to business owners who may want to take their virutal buisness to a physical space.',
        images: images['popshop']
    },
    {
        name: 'Group randomizer',
        builtWith: 'Javascript / Jquery / HTML / CSS',
        link: 'https://chrispinto1.github.io/Team-Ramdomizer/',
        github: 'https://github.com/chrispinto1/Team-Ramdomizer',
        thirdPartyAPIs: 'LOVO Voice API',
        role: 'Developer',
        description: 'An app that puts teams into groups randomly with animations and voice overs. It will save the result to local storage so on the next visit it will display the saved groups for future references.',
        images: images['team_randomizer']
    },
    // {
    //     name: 'Portfolio',
    //     builtWith: 'React / CSS',
    //     link: '',
    //     github: 'https://github.com/chrispinto1/ChristianPintoPortfolio',
    //     thirdPartyAPIs: 'EmailJS',
    //     description: 'My personal portfolio'
    // }
]

const engineeringProjects = [
    {
        name: 'Robotic Hand',
        builtWith: 'Assembly / 3D Printed Parts / Servo Motors / Cyclone IV - Altera DE2 Board',
        description: 'A robotic hand that is controlled by servo motors which are then controlled by outputs from push buttons on the Altera DE2 Board'
    },
    {
        name: 'Survive NYC',
        builtWith: 'Java',
        description: 'An android game app about killing zombies to survive till you make it to the end. Project includes our own design and involves collison detection for both the zoombies, player, and bulltets.'
    },
    {
        name: 'Deciphering/Ciphering Messages',
        builtWith: 'Matlab',
        description: 'A program written to decipher messages used by certain encryption algorithms as well as encrypt messages by the users choice'
    },
    {
        name: 'Mr. P',
        builtWith: 'C / Arduino / Sensors / Servo Motors / 8-bit LCD Display',
        description: 'A smart parking lot that will inform drivers of how many parking spots are available in the garage to help save time from looking.'
    },
    {
        name: 'Smart Parking Garage',
        builtWith: 'C / Arduino / Photoresistors / Servo Motors / DC Motor / 8-Bit LCD Display',
        description: 'A smart parking garage that will help you locate the closest parking spot available. If the first floor is full, it will open the elevator in which your car will go in and take you to the next available floor with parking spaces.'
    }
]

const data = {
    webProjects,
    engineeringProjects
}

export default data