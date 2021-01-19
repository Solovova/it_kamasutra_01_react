import s from './Posts.module.css';
import Post from './Post/Post';

const Posts = (props) => {
    let postElements = props.state.map( post => <Post message={post.message} likesCount={post.likesCount}/>)

    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )

}

export default Posts;