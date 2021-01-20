import s from './Messages.module.css'
import Dialogs from "./Dialogs/Dialogs";
import MessageContainer from "./MessageContainer/MessageContainer";

const Messages = (props) => {
    return (
        <div className={s.messagesMain}>
            <Dialogs state = {props.state.dialogsComp} store = {props.store}/>
            <MessageContainer state = {props.state.messageContainerComp} store = {props.store}/>
        </div>
    );
};

export default Messages;