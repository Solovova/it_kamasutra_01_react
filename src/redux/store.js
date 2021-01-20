const ADD_POST = 'ADD-POST'
const UPDATE_POST_TEXT_CHANGE = 'UPDATE-POST-TEXT-CHANGE'

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
                newPostText: 'Test text',
            }
        },
        messagesComp: {
            dialogsComp: {
                dialogItemsData: dialogItemsData
            },
            messageContainerComp: {
                messageItemsData: messageItemsData
            }
        }
    },

    _observer() {
        console.log("State changed")
    },

    _addPost() {
        debugger;
        const ids = this._state.profileComp.postsComp.posts.map(post => post.id);
        const sorted = ids.sort((a, b) => a - b);
        const key = sorted[sorted.length - 1] + 1
        let newPost = {
            id: key,
            message:this._state.profileComp.postsComp.newPostText,
            likesCount: 0
        };
        this._state.profileComp.postsComp.posts.push(newPost);
        this._state.profileComp.postsComp.newPostText = '';
        this._observer(this._state);
    },

    _updatePostTextChange(newPostText) {
        this._state.profileComp.postsComp.newPostText = newPostText;
        this._observer(this._state);
    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._observer = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            this._addPost()
        }else if (action.type === UPDATE_POST_TEXT_CHANGE) {
            this._updatePostTextChange(action.newPostText)
        }
    }
}

export const addPostActionCreator = () => ({type:ADD_POST})
export const updatePostTextChangeActionCreator = (text) => ({type:UPDATE_POST_TEXT_CHANGE,newPostText: text})

export default store;
window.store = store //for