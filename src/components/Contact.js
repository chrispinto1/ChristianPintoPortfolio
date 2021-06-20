import { useState } from 'react'
import emailjs , { init } from 'emailjs-com';

const Contact = () => {

    init(process.env.USER_ID)
    
    const [email, setEmail] = useState({
        email: '',
        subject: '',
        message: ''
    })
    const [sent, setSent] = useState(false)

    const handleChange = (event) => {
        const input = event.target
        if(input.style.boxShadow === 'yellow 0px 0px 10px'){
            input.style.boxShadow = '0 0 3px #000000'
        }
        setEmail({...email, [input.name] : input.value})
    }

    const sendEmail = (event) => {
        event.preventDefault()
        if(!email.email || !email.subject || !email.message){
            displayErrors()
        }else{
            setSent(true)
            emailjs.send(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, email, process.env.REACT_APP_USER_ID)
        }
    }

    const displayErrors = () => {
        Object.keys(email).forEach(key => {
            if(!email[key]){
                const input = document.querySelector(`[name=${key}]`)
                input.style.boxShadow = '0 0 10px yellow'
                input.placeholder = `Please fill out the ${key} field`
                input.classList.add('input-error')
            }
        })
    }

    return(
        <div className="contact-container">
            <h1>Contact</h1>
            <div>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" space="preserve" width="125" height="100" viewBox="0 0 125 100">
                    <path d="M60,0 l50,0 a10,10 0 0,1 7,17 l-50,50 a10,10 0 0,1 -13,0 l-50,-50 a10,10 0 0,1 7,-17z" stroke="#000" stroke-width="0" fill="white" />
                    <path d="M60,90 l54,0 a10,10 0 0,0 7,-7 l0,-60 -50,50 a15,15 0 0,1 -21,0 l-50,-50 0,60 a10,10 0 0,0 7,7z" stroke="#000" stroke-width="0" fill="white" />  
                </svg>
                <h3>Have any questions?</h3> 
            </div>
            <p>Feel free to send me an email and I'll get back within 24 hours!</p>
            <form className="contact-form">
                <label>Email</label>
                <input name="email" onChange={handleChange} placeholder="Email"></input>
                <label>Subject</label>
                <input name="subject" onChange={handleChange} placeholder="Subject"/>
                <label>Message</label>
                <textarea onChange={handleChange} placeholder="Message" name="message"></textarea>
                <button onClick={sendEmail} disabled={sent}>Send Message</button>
            </form>
        </div>
    )
}

export default Contact