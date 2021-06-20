const MessagePopup = ({message, styles}) => {
    return (
        <div className="message-container" style={styles}>
            <p className="message-text">
                {message}
            </p>
        </div>
    )
}

export default MessagePopup