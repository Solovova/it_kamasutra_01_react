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


    switch (action.type) {
        case ADD_POST:
            const ids = state.postsComp.posts.map(post => post.id);
            const sorted = ids.sort((a, b) => a - b);
            const key = sorted[sorted.length - 1] + 1
            let newPost = {
                id: key,
                message: state.postsComp.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postsComp: {
                    ...state.postsComp,
                    posts: [...state.postsComp.posts, newPost],
                    newPostText: ''
                }
            };
        case UPDATE_POST_TEXT_CHANGE:
            return {
                ...state,
                postsComp: {
                    ...state.postsComp,
                    newPostText: action.newPostText
                }
            };
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostTextChangeActionCreator = (text) => ({type: UPDATE_POST_TEXT_CHANGE, newPostText: text});

export default reducerProfile;

