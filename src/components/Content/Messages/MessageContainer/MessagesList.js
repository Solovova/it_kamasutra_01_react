import s from "./MessagesList.module.css";
import MessageItem from "./MessageItem/MassageItem";
import React from "react";
import {addMessageActionCreator, updateMessageTextChangeActionCreator} from "../../../../redux/reducerMessages";


const MessagesList = (props) => {
        let messageItemElements = props.state.messageItemsData.map(messageItem => <MessageItem
            message={messageItem.message}/>)

        let onNewMessageClick = () => {
            let action = addMessageActionCreator()
            props.dispatch(action)
        }

        let onNewMessageTextChange = (e) => {
            let text = e.target.value;
            let action = updateMessageTextChangeActionCreator(text)
            props.dispatch(action)
        }

        return (
            <div className={s.messageContainer}>
                {messageItemElements}
                <div>
                    <div>
                        <textarea placeholder='Enter your message' onChange={onNewMessageTextChange} value={props.state.newMessageText}></textarea>
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