import { useEffect, useRef, useState } from "react"

const MessagePopup = ({message, styles, id, htmlTag}) => {

    const messageRef = useRef(null)
    const [count, setCount] = useState(0)

    useEffect(function(){
        if(htmlTag && count === 0){
            messageRef.current.insertAdjacentHTML('beforeend', htmlTag)
            setCount(1)
        }
    }, [htmlTag, count])

    return (
        <div id={id} className="message-container" style={styles}>
            <p ref={messageRef} className="message-text" style={{color: styles.color}}>
                {message}
            </p>
        </div>
    )
}

export default MessagePopup