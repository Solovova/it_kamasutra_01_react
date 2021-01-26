import s from "./MessagesList.module.css";
import MessageItem from "./MessageItem/MassageItem";
import React from "react";


const MessagesList = (props) => {
        let messageItemElements = props.messageItemsData.map(messageItem =>
            <MessageItem message={messageItem.message} key={messageItem.id}/>)

        let onNewMessageClick = () => {
            props.newMessageClick()
        }

        let onNewMessageTextChange = (e) => {
            let text = e.target.value;
            props.newMessageTextChange(text)
        }

        return (
            <div className={s.messageContainer}>
                {messageItemElements}
                <div>
                    <div>
                        <textarea placeholder='Enter your message'
                                  onChange={onNewMessageTextChange}
                                  value={props.newMessageText}></textarea>
                    </div>
                    <div>
                        <button onClick={onNewMessageClick}>New message</button>
                    </div>
                </div>
            </div>

        );
    }
;

export default MessagesList;