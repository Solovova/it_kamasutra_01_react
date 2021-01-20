const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_MESSAGE_TEXT_CHANGE = 'UPDATE_MESSAGE_TEXT_CHANGE'

const reducerMessages = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            const ids = state.messageContainerComp.messageItemsData.map(post => post.id);
            const sorted = ids.sort((a, b) => a - b);
            const key = sorted[sorted.length - 1] + 1
            let newMessage = {
                id: key,
                message:state.messageContainerComp.newMessageText
            };
            state.messageContainerComp.messageItemsData.push(newMessage);
            state.messageContainerComp.newMessageText = '';
            return state;
        case UPDATE_MESSAGE_TEXT_CHANGE:
            state.messageContainerComp.newMessageText = action.newMessageText;
            return state;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type:ADD_MESSAGE})
export const updateMessageTextChangeActionCreator = (text) => ({type:UPDATE_MESSAGE_TEXT_CHANGE,newMessageText: text})

export default reducerMessages;