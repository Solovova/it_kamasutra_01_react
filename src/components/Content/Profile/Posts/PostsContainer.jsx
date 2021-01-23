import React from 'react';
import {addPostActionCreator, updatePostTextChangeActionCreator} from "../../../../redux/reducerProfile";
import Posts from "./Posts";

const PostsContainer = (props) => {
    let store = props.store;

    let addPostClick = () => {
        let action = addPostActionCreator()
        store.dispatch(action)
    };

    let newPostTextChange = (text) => {
        let action = updatePostTextChangeActionCreator(text)
        store.dispatch(action)
    };

    return (
        <Posts posts={store.getState().profileComp.postsComp.posts}
               newPostText={store.getState().profileComp.postsComp.newPostText}
               addPostClick={addPostClick}
               newPostTextChange={newPostTextChange}
        />
    )

};

export default PostsContainer;