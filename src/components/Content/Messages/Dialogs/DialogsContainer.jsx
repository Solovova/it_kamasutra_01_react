import Dialogs from "./Dialogs";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
    dialogItemsData: state.messagesComp.dialogsComp.dialogItemsData
})

let mapDispatchToProps = () => ({

})

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer