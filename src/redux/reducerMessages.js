const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_MESSAGE_TEXT_CHANGE = 'UPDATE_MESSAGE_TEXT_CHANGE'

let initialState = {
    dialogsComp: {
        dialogItemsData: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Andrew'},
            {id: 3, name: 'Sveta'},
            {id: 4, name: 'Sasha'},
            {id: 5, name: 'Viktor'},
            {id: 6, name: 'Valera1'}
        ]
    },
    messageContainerComp: {
        messageItemsData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo1'}
        ],
        newMessageText: ''
    }
}

const reducerMessages = (state = initialState, action) => {
    let stateCopy = {...state}

    switch (action.type) {
        case ADD_MESSAGE:
            const ids = stateCopy.messageContainerComp.messageItemsData.map(post => post.id);
            const sorted = ids.sort((a, b) => a - b);
            const key = sorted[sorted.length - 1] + 1
            let newMessage = {
                id: key,
                message: stateCopy.messageContainerComp.newMessageText
            };
            stateCopy.messageContainerComp = {...state.messageContainerComp}
            stateCopy.messageContainerComp.messageItemsData = [...state.messageContainerComp.messageItemsData]
            stateCopy.messageContainerComp.messageItemsData.push(newMessage);
            stateCopy.messageContainerComp.newMessageText = '';
            return stateCopy;
        case UPDATE_MESSAGE_TEXT_CHANGE:
            stateCopy.messageContainerComp = {...state.messageContainerComp}
            stateCopy.messageContainerComp.newMessageText = action.newMessageText;
            return stateCopy;
        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateMessageTextChangeActionCreator = (text) => ({type: UPDATE_MESSAGE_TEXT_CHANGE, newMessageText: text})

export default reducerMessages;