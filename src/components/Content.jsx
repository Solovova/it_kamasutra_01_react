import './Content.module.css'
import s from './Content.module.css'

const Content = () => {
    return <div className={s.content}>
    <div>
      <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
    </div>
    <div>
      ava + description
    </div>
    <div>
      My posts
      <div>
        New post
      </div>
      <div className={s.posts}>
        <div className={s.item}>
          post 1
        </div>
        <div className={s.item}>
          post 2
        </div>
      </div>
    </div>
  </div>
}

export default Content;