import {addMessageActionCreator, updateMessageTextChangeActionCreator} from "../../../../redux/reducerMessages";
import MessagesList from "./MessagesList";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
    messageItemsData: state.messagesComp.messageContainerComp.messageItemsData,
    newMessageText: state.messagesComp.messageContainerComp.newMessageText
})

let mapDispatchToProps = (dispatch) => ({
    newMessageClick: () => {
        dispatch(addMessageActionCreator())
    },
    newMessageTextChange: (text) => {
        dispatch(updateMessageTextChangeActionCreator(text))
    }
})

const MessagesListContainer = connect(mapStateToProps, mapDispatchToProps)(MessagesList)

export default MessagesListContainer;