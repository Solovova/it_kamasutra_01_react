import './Content.module.css'
import s from './Content.module.css'
import Posts from "./Posts/Posts";

const Content = () => {
    return <div className={s.content}>
        <div>
            <img src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350' />
        </div>
        <div>
            ava + description
        </div>
        <Posts />

    </div>
}

export default Content;