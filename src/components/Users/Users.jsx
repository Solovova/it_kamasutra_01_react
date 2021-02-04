import styles from './Users.module.css'
import * as axios from 'axios';
import userPhoto from '../../assets/images/user.png';

const Users = (props) => {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                props.usersSet(response.data.items);
            });
    }


    return (
        <div>
            Users
            {
                props.users.map(user => (
                        <div key={user.id}>
                            <span>
                                <div>
                                    <img src={user.photos.small != null ? user.photos.small : userPhoto} className={styles.userPhoto}/>
                                </div>
                                <div>
                                    {user.followed
                                        ? <button onClick={() => props.usersUnfollow(user.id)}>UnFollow</button>
                                        : <button onClick={() => props.usersFollow(user.id)}>Follow</button>
                                    }

                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{user.name}</div>
                                    <div>{user.status}</div>
                                </span>
                            </span>
                        </div>
                    )
                )
            }
        </div>


    )
}

export default Users