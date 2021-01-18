import s from "./MessageContainer.module.css";
import MessageItem from "./MessageItem/MassageItem";

const MessageContainer = () => {
    return (
        <div className={s.messageContainer}>
            <MessageItem text = "Message 1" />
            <MessageItem text = "Message 2" />
            <MessageItem text = "Message 3" />
            <MessageItem text = "Message 4" />
            <MessageItem text = "Message 5" />
            <MessageItem text = "Message 6" />
            <MessageItem text = "Message 7" />
        </div>
    );
};

export default MessageContainer;