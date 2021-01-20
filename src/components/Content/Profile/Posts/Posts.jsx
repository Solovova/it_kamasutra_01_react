import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updatePostTextChangeActionCreator} from "../../../../redux/store";

const Posts = (props) => {
    let postElements = props.state.posts.map( post => <Post message={post.message} likesCount={post.likesCount}/>);
    let newPostElement = React.createRef()

    let onAddPostClick = () => {
        let action = addPostActionCreator()
        props.dispatch(action)
    }

    let onNewPostTextChange = () => {
        let text = newPostElement.current.value;
        let action = updatePostTextChangeActionCreator(text)
        props.dispatch(action)
    }

    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea onChange={onNewPostTextChange} value={props.state.newPostText} ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={onAddPostClick}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )

}

export default Posts;