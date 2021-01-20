import s from './Messages.module.css'
import Dialogs from "./Dialogs/Dialogs";
import MessageContainer from "./MessageContainer/MessageContainer";

const Messages = (props) => {
    return (
        <div className={s.messagesMain}>
            <Dialogs state = {props.state.dialogsComp} dispatch = {props.dispatch}/>
            <MessageContainer state = {props.state.messageContainerComp} dispatch = {props.dispatch}/>
        </div>
    );
};

export default Messages;