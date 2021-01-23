import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
    let dialogItemElements = props.dialogItemsData.map(dialogItem => <DialogItem name={dialogItem.name} id={dialogItem.id} />);

    return (
        <div className={s.dialogs}>
            {dialogItemElements}
        </div>
    );
};

export default Dialogs