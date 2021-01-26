import styles from './Users.module.css'

const Users = (props) => {
    if (props.users.length === 0) {
        props.usersSet ( [
            {
                id: 1,
                photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_l0NXJRVwDgPOEw_GsSjXrmGo3hcd_iIzLQ&usqp=CAU',
                followed: false,
                fullName: 'Solo',
                status:'worker',
                location: {
                    city: 'Minsk',
                    country: 'Belarus'
                }
            },
            {
                id: 2,
                photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_l0NXJRVwDgPOEw_GsSjXrmGo3hcd_iIzLQ&usqp=CAU',
                followed: true,
                fullName: 'Solo 2',
                status:'boss',
                location: {
                    city: 'Minsk 2',
                    country: 'Belarus 2'
                }
            },
            {
                id: 3,
                photoUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_l0NXJRVwDgPOEw_GsSjXrmGo3hcd_iIzLQ&usqp=CAU',
                followed: false,
                fullName: 'Solo 3',
                status:'student',
                location: {
                    city: 'Minsk 3',
                    country: 'Belarus 3'
                }
            }
        ])
    }


    return (
        <div>
            Users
            {
                props.users.map(user => (
                        <div key={user.id}>
                            <span>
                                <div>
                                    <img alt="user" src={user.photoUrl} className={styles.userPhoto}/>
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
                                    <div>{user.fullName}</div>
                                    <div>{user.status}</div>
                                </span>
                                <span>
                                    <div>{user.location.city}</div>
                                    <div>{user.location.country}</div>
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