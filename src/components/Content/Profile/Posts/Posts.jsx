import s from './Posts.module.css';
import Post from './Post/Post';

const Posts = (props) => {
    let postElements = props.state.posts.map( post => <Post message={post.message} likesCount={post.likesCount}/>);
    let onClickAdd = () => {

        //Так нельзя
        let text = document.getElementById("test_new_add").value
        alert(text)
    }

    return (
        <div>
            My posts
            <div>
                <div>
                    <textarea id="test_new_add"></textarea>
                </div>
                <div>
                    <button onClick={onClickAdd}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postElements}
            </div>
        </div>
    )

}

export default Posts;