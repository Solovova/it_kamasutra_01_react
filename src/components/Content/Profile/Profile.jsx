import './Profile.module.css'
import s from './Profile.module.css'
import Posts from "./Posts/Posts";

const Profile = () => {
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

export default Profile;