const USERS_FOLLOW = 'USERS_FOLLOW'
const USERS_UNFOLLOW = 'USERS_UNFOLLOW'
const USERS_SET_USERS= 'USERS_SET_USERS'

let initialState = {
    users: [
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
    ]
}

const reducerUsers = (state = initialState, action) => {
    switch (action.type) {
        case USERS_FOLLOW:
            return  {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {
                            ...user,
                            followed: true
                        }
                    }
                    return user;
                })
            }
        case USERS_UNFOLLOW:
            return  {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.id) {
                        return {
                            ...user,
                            followed: false
                        }
                    }
                    return user;
                })
            }
        case USERS_SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export const acUsersFollow = (userID) => ({type: USERS_FOLLOW, id: userID});
export const acUsersUnfollow = (userID) => ({type: USERS_UNFOLLOW, id: userID});
export const acUsersSetUsers = (users) => ({type: USERS_SET_USERS, users: users});

export default reducerUsers;

