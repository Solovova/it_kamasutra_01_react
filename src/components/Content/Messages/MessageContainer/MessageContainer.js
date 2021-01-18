import s from "./MessageContainer.module.css";
import MessageItem from "./MessageItem/MassageItem";

const MessageContainer = () => {
    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]

    return (
        <div className={s.messageContainer}>
            <MessageItem message={messagesData[0].message}/>
            <MessageItem message={messagesData[1].message}/>
        </div>
    );
};

export default MessageContainer;