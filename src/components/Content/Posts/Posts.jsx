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
        <Post message="Post 1" likesCount='0'/>
        <Post message="Post 2" likesCount='1'/>
        <Post message="Post 3" likesCount='4'/>
        <Post message="Post 4" likesCount='23'/>
        <Post message="Post 5" likesCount='32'/>
        <Post message="Post 6" likesCount='22'/>
      </div>
    </div>
  )

}

export default Posts;