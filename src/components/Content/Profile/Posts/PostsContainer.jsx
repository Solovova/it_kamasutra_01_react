import React from 'react';
import {addPostActionCreator, updatePostTextChangeActionCreator} from "../../../../redux/reducerProfile";
import Posts from "./Posts";
import StoreContext from "../../../../StoreContext";

const PostsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState();
                    let addPostClick = () => {
                        let action = addPostActionCreator()
                        store.dispatch(action)
                    };

                    let newPostTextChange = (text) => {
                        let action = updatePostTextChangeActionCreator(text)
                        store.dispatch(action)
                    };
                    return (<Posts posts={state.profileComp.postsComp.posts}
                                   newPostText={state.profileComp.postsComp.newPostText}
                                   addPostClick={addPostClick}
                                   newPostTextChange={newPostTextChange}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    )

};

export default PostsContainer;