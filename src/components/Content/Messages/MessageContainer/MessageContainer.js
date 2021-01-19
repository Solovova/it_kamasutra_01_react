import s from "./MessageContainer.module.css";
import MessageItem from "./MessageItem/MassageItem";

const MessageContainer = (props) => {
        let messageItemElements = props.state.map(messageItem => <MessageItem message={messageItem.message}/>)

        return (
            <div className={s.messageContainer}>
                {messageItemElements}
            </div>
        );
    }
;

export default MessageContainer;