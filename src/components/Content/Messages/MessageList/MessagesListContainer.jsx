import React from "react";
import {addMessageActionCreator, updateMessageTextChangeActionCreator} from "../../../../redux/reducerMessages";
import MessagesList from "./MessagesList";


const MessagesListContainer = (props) => {
        let store = props.store;

        let newMessageClick = () => {
            let action = addMessageActionCreator()
            store.dispatch(action)
        }

        let newMessageTextChange = (text) => {
            let action = updateMessageTextChangeActionCreator(text)
            store.dispatch(action)
        }

        return (
            <MessagesList
                newMessageClick={newMessageClick}
                newMessageTextChange={newMessageTextChange}
                messageItemsData = {store.getState().messagesComp.messageContainerComp.messageItemsData}
                newMessageText = {store.getState().messagesComp.messageContainerComp.newMessageText}
            />
        );
    }
;

export default MessagesListContainer;