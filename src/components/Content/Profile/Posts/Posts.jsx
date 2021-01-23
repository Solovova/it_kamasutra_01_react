import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';

const Posts = (props) => {
    let postElements = props.posts.map( post => <Post message={post.message} likesCount={post.likesCount}/>);

    let onAddPostClick = () => {
        props.addPostClick()
    }

    let onNewPostTextChange = (e) => {
        let text = e.target.value;
        props.newPostTextChange(text)
    }

    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea placeholder='Enter your post' onChange={onNewPostTextChange} value={props.newPostText}> </textarea>
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