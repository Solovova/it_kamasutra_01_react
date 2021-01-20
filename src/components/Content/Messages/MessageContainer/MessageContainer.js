import s from "./MessageContainer.module.css";
import MessageItem from "./MessageItem/MassageItem";
import React from "react";
import {
    addMessageActionCreator,
    updateMessageTextChangeActionCreator
} from "../../../../redux/store";

const MessageContainer = (props) => {
        let messageItemElements = props.state.messageItemsData.map(messageItem => <MessageItem
            message={messageItem.message}/>)
        let newMessageElement = React.createRef()

        let onNewMessageClick = () => {
            let action = addMessageActionCreator()
            props.dispatch(action)
        }


        let onNewMessageTextChange = () => {
            let text = newMessageElement.current.value;
            let action = updateMessageTextChangeActionCreator(text)
            props.dispatch(action)
        }

        return (
            <div className={s.messageContainer}>
                {messageItemElements}
                <div>
                    <div>
                        <textarea onChange={onNewMessageTextChange} ref={newMessageElement} value={props.state.newMessageText}></textarea>
                    </div>
                    <div>
                        <button onClick={onNewMessageClick}>New message</button>
                    </div>
                </div>
            </div>

        );
    }
;

export default MessageContainer;