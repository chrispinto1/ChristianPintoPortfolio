import { useEffect, useState } from 'react'
import emailjs , { init } from 'emailjs-com';
import validator from 'validator';
import MessagePopup from '../components/MessagePopup';

const ContactForm = () => {

    init(process.env.USER_ID)

    const [email, setEmail] = useState({
        email: '',
        subject: '',
        message: ''
    })
    const [sent, setSent] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const messageStyles = {
        top: 5,
        left: '50%',
        marginLeft: '-92.5px',
        color: 'white',
    }

    useEffect(() => {
        if(emailError){
            const popup = document.querySelector('#email')
            popup.classList.add('popup')
            setTimeout(function(){
                popup.classList.add('fade-popup')
                setTimeout(function(){
                    setEmailError(false)
                }, 1500)
            }, 2000)
        }
    }, [emailError])

    const handleChange = (event) => {
        const input = event.target
        if(input.style.boxShadow === 'red 0px 0px 10px'){
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
                input.style.boxShadow = '0 0 5px red'
                input.placeholder = `Please fill out the ${key} field`
                input.classList.add('input-error')
            }
        })
    }

    const handleEmailValidation = (event) => {
        if(!validator.isEmail(event.target.value) && event.target.value !== ''){
            setEmailError(true)
            event.target.style.boxShadow = '0 0 10px red'
        }
    }


    return(
        <form className="contact-form">
            <label>Email</label>
            <div className="email">
                <input name="email" onChange={handleChange} placeholder="Email" onBlur={handleEmailValidation}></input>
                {
                    emailError && 
                        <MessagePopup id={'email'} styles={messageStyles} message={'Please enter a valid email!'}/>
                }
            </div>
            <label>Subject</label>
            <input name="subject" onChange={handleChange} placeholder="Subject"/>
            <label>Message</label>
            <textarea onChange={handleChange} placeholder="Message" name="message"></textarea>
            <button onClick={sendEmail} disabled={sent}>Send Message</button>
        </form>
    )
}

export default ContactForm