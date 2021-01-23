import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let store = props.store;

    return (
       <Dialogs
           dialogItemsData = {store.getState().messagesComp.dialogsComp.dialogItemsData}
       />
    );
};

export default DialogsContainer