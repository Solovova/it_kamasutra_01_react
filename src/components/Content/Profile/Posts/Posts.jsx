import React from 'react';
import s from './Posts.module.css';
import Post from './Post/Post';

const Posts = (props) => {
    let postElements = props.state.posts.map( post => <Post message={post.message} likesCount={post.likesCount}/>);
    let newPostElement = React.createRef()
    let onAddPostClick = () => {
        let text = newPostElement.current.value;
        alert(text)
    }

    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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