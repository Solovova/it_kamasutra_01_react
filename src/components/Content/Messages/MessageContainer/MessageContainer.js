import s from "./MessageContainer.module.css";
import MessageItem from "./MessageItem/MassageItem";
import React from "react";

const MessageContainer = (props) => {
        let messageItemElements = props.state.messageItemsData.map(messageItem => <MessageItem message={messageItem.message}/>)
        let newMessageElement = React.createRef()
        let onNewMessageClick = () => {
            let text = newMessageElement.current.value;
            alert(text)
        }

        return (
            <div className={s.messageContainer}>
                {messageItemElements}
                <div>
                    <div>
                        <textarea ref={newMessageElement}></textarea>
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