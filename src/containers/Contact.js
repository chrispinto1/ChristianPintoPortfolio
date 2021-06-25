import ContactForm from '../components/ContactForm';

const Contact = ({contactRef, load}) => {

    return(
        <div ref={contactRef} className="contact-container content" data-name="contact">
            {
                load &&
                    <div className="form-container">
                        <div className="contact-header">
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" space="preserve" width="125" height="100" viewBox="0 0 125 100" class="email-svg">
                                <path d="M60,0 l50,0 a10,10 0 0,1 7,17 l-50,50 a10,10 0 0,1 -13,0 l-50,-50 a10,10 0 0,1 7,-17z" stroke="#000" strokeWidth="0" fill="black" />
                                <path d="M60,90 l54,0 a10,10 0 0,0 7,-7 l0,-60 -50,50 a15,15 0 0,1 -21,0 l-50,-50 0,60 a10,10 0 0,0 7,7z" stroke="#000" strokeWidth="0" fill="black" />  
                            </svg>
                            <div>
                                <h1>Have any questions?</h1>
                                <p>Feel free to send me an email and I'll get back within 24 hours!</p>
                            </div> 
                        </div>
                        <ContactForm />
                    </div>
            }
        </div>
    )
}

export default Contact