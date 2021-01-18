import s from "./MessageContainer.module.css";
import MessageItem from "./MessageItem/MassageItem";

const MessageContainer = () => {
        let messageItemsData = [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ]

        let messageItemElements = messageItemsData.map(messageItem => <MessageItem message={messageItem.message}/>)

        return (
            <div className={s.messageContainer}>
                {messageItemElements}
            </div>
        );
    }
;

export default MessageContainer;