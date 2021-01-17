import s from './Posts.module.css';
import Post from './Post/Post';

const Posts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>

      </div>
      <div className={s.posts}>
        <Post message="Post 1" />
        <Post message="Post 2"/>
        <Post message="Post 3"/>
        <Post message="Post 4"/>
        <Post message="Post 5"/>
        <Post message="Post 6"/>
      </div>
    </div>
  )

}

export default Posts;