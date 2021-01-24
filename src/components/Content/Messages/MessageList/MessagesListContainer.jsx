import React from "react";
import {addMessageActionCreator, updateMessageTextChangeActionCreator} from "../../../../redux/reducerMessages";
import MessagesList from "./MessagesList";
import StoreContext from "../../../../StoreContext";


const MessagesListContainer = () => {
        return (
            <StoreContext.Consumer>
                {
                    store => {
                        let state = store.getState();
                        let newMessageClick = () => {
                            let action = addMessageActionCreator()
                            store.dispatch(action)
                        };

                        let newMessageTextChange = (text) => {
                            let action = updateMessageTextChangeActionCreator(text)
                            store.dispatch(action)
                        };
                        return (
                            <MessagesList
                                newMessageClick={newMessageClick}
                                newMessageTextChange={newMessageTextChange}
                                messageItemsData={state.messagesComp.messageContainerComp.messageItemsData}
                                newMessageText={state.messagesComp.messageContainerComp.newMessageText}
                            />)
                    }
                }
            </StoreContext.Consumer>
        );
    }
;

export default MessagesListContainer;