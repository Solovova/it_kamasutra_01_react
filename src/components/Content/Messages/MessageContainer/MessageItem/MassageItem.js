import s from "./MassageItem.module.css";

const MessageItem = (props) => {
    return (
        <div className={s.messageItem}> {props.text} </div>
    );
};

export default MessageItem;