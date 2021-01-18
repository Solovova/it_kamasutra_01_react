import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = () => {
    let dialogItemsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ]

    let dialogItemElements = dialogItemsData.map(dialogItem => <DialogItem name={dialogItem.name} id={dialogItem.id} />);

    return (
        <div className={s.dialogs}>
            {dialogItemElements}
        </div>
    );
};

export default Dialogs