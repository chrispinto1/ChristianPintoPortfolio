const MessagePopup = ({message, styles, id}) => {
    return (
        <div id={id} className="message-container" style={styles}>
            <p className="message-text" style={{color: styles.color}}>
                {message}
            </p>
        </div>
    )
}

export default MessagePopup