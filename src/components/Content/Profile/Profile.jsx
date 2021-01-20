import s from './Profile.module.css'
import Posts from "./Posts/Posts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
    return <div className={s.content}>
        <ProfileInfo/>
        <Posts state = {props.state.postsComp} store = {props.store}/>
    </div>
}

export default Profile;