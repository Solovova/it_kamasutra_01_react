import {addPostActionCreator, updatePostTextChangeActionCreator} from "../../../../redux/reducerProfile";
import Posts from "./Posts";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
    posts: state.profileComp.postsComp.posts,
    newPostText: state.profileComp.postsComp.newPostText
})

let mapDispatchToProps = (dispatch) => ({
    addPostClick: () => {
        dispatch(addPostActionCreator())
    },
    newPostTextChange: (text) => {
        dispatch(updatePostTextChangeActionCreator(text))
    }
})

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;