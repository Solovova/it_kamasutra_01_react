import s from './Messages.module.css'
import Dialogs from "./Dialogs/Dialogs";
import MessageContainer from "./MessageContainer/MessageContainer";

const Messages = () => {
    return (
        <div className={s.messagesMain}>
            <Dialogs/>
            <MessageContainer/>
        </div>
    );
};

export default Messages;