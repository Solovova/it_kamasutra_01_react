import s from './Messages.module.css'

const Messages = () => {
    console.log(s)
    console.log("asa")
    return (
        <div className={s.messagesMain}>
            <div className={s.dialogs}>
                <div className={s.dialogsItems}> Solo  </div>
                <div className={`${s.dialogsItems} ${s.active}`}>Ira</div>
            </div>

            <div className={s.messages}>
                <div className={s.message}> Message 1 </div>
                <div className={s.message}> Message 2 </div>
                <div className={s.message}> Message 3 </div>
                <div className={s.message}> Message 4 </div>
                <div className={s.message}> Message 5 </div>
                <div className={s.message}> Message 7 </div>
            </div>
        </div>
    );
};

export default Messages;