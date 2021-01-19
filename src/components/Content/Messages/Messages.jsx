import s from './Messages.module.css'
import Dialogs from "./Dialogs/Dialogs";
import MessageContainer from "./MessageContainer/MessageContainer";

const Messages = (props) => {
    return (
        <div className={s.messagesMain}>
            <Dialogs state = {props.state.dialogs}/>
            <MessageContainer state = {props.state.messageContainer}/>
        </div>
    );
};

export default Messages;