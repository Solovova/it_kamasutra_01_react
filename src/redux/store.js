import reducerMessages from "./reducerMessages";
import reducerProfile from "./reducerProfile";

let postsData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 12},
    {id: 2, message: 'It\'s my first post11', likesCount: 11}
]

let dialogItemsData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera1'}
]

let messageItemsData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your it-kamasutra?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo1'}
]

let store = {
    _state: {
        profileComp :{
            postsComp: {
                posts: postsData,
                newPostText: '',
            }
        },
        messagesComp: {
            dialogsComp: {
                dialogItemsData: dialogItemsData
            },
            messageContainerComp: {
                messageItemsData: messageItemsData,
                newMessageText: ''
            }
        }
    },

    _observer() {
        console.log("State changed")
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._observer = observer;
    },

    dispatch(action) {
        this._state.profileComp = reducerProfile(this._state.profileComp,action)
        this._state.messagesComp = reducerMessages(this._state.messagesComp,action)
        this._observer(this._state);
    }
}

export default store;
window.store = store //for