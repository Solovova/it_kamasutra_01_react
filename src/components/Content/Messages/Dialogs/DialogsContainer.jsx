import Dialogs from "./Dialogs";
import StoreContext from "../../../../StoreContext";

const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>
            {
                store => {
                    let state = store.getState();
                    return (
                        <Dialogs
                            dialogItemsData={state.messagesComp.dialogsComp.dialogItemsData}
                        />
                    )
                }
            }
        </StoreContext.Consumer>
    );
};

export default DialogsContainer