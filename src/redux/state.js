import {renderEntireTree} from "../render";

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

let state = {
    profile :{
        posts: {
            posts: postsData,
            newPostText: 'Test text',
            onAddPostClick: () => {
                const ids = state.profile.posts.posts.map(post => post.id);
                const sorted = ids.sort((a, b) => a - b);
                const key = sorted[sorted.length - 1] + 1
                let newPost = {
                    id: key,
                    message:state.profile.posts.newPostText,
                    likesCount: 0
                };
                state.profile.posts.posts.push(newPost);
                renderEntireTree(state);
            },

            onNewPostTextChange: (newPostText) => {
                state.profile.posts.newPostText = newPostText;
                renderEntireTree(state);
            }
        }
    },
    messages: {
        dialogs: dialogItemsData,
        messageContainer: messageItemsData
    }
}

export default state;