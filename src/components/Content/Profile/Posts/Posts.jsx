import s from './Posts.module.css';
import Post from './Post/Post';

const Posts = () => {
    let postsData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11}
    ]

    let postElements = postsData.map( post => <Post message={post.message} likesCount={post.likesCount}/>)

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