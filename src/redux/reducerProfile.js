const ADD_POST = 'ADD_POST'
const UPDATE_POST_TEXT_CHANGE = 'UPDATE_POST_TEXT_CHANGE'

let initialState = {
    postsComp: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post11', likesCount: 11}
        ],
        newPostText: ''
    }
}

const reducerProfile = (state = initialState, action) => {
    let stateCopy = {...state};

    switch (action.type) {
        case ADD_POST:
            const ids = state.postsComp.posts.map(post => post.id);
            const sorted = ids.sort((a, b) => a - b);
            const key = sorted[sorted.length - 1] + 1
            let newPost = {
                id: key,
                message:state.postsComp.newPostText,
                likesCount: 0
            };
            stateCopy.postsComp = {...state.postsComp}
            stateCopy.postsComp.posts = [...state.postsComp.posts]
            stateCopy.postsComp.posts.push(newPost);
            stateCopy.postsComp.newPostText = '';
            return stateCopy;
        case UPDATE_POST_TEXT_CHANGE:
            stateCopy.postsComp = {...state.postsComp}
            stateCopy.postsComp.newPostText = action.newPostText;
            return stateCopy;
        default:
            console.log("def prof")
            return state;
    }
}

export const addPostActionCreator = () => ({type:ADD_POST});
export const updatePostTextChangeActionCreator = (text) => ({type:UPDATE_POST_TEXT_CHANGE,newPostText: text});

export default reducerProfile;

