import s from './Messages.module.css'
import MessagesListContainer from "./MessageList/MessagesListContainer";
import DialogsContainer from "./Dialogs/DialogsContainer";

const Messages = (props) => {
    return (
        <div className={s.messagesMain}>
            <DialogsContainer store = {props.store}/>
            <MessagesListContainer store = {props.store}/>
        </div>
    );
};

export default Messages;