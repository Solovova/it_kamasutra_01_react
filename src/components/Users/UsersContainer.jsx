import {connect} from "react-redux";
import Users from "./Users";
import {acUsersFollow, acUsersSetUsers, acUsersUnfollow} from "../../redux/reducerUsers";

let mapStateToProps = (state) => ({
    users: state.usersComp.users
})

let mapDispatchToProps = (dispatch) => ({
    usersFollow: (userID) => {
        dispatch(acUsersFollow(userID))
    },
    usersUnfollow: (userID) => {
        dispatch(acUsersUnfollow(userID))
    },
    usersSet: (users) => {
        dispatch(acUsersSetUsers(users))
    },

})

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer;