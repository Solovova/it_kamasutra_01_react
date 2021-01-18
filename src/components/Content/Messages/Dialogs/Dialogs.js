import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <DialogItem id="1" name = "Solo" active = {true}/>
            <DialogItem id="2" name = "Ira"/>
            <DialogItem id="3" name = "Dima"/>
            <DialogItem id="4" name = "Vova"/>
            <DialogItem id="5" name = "Igor" active = {true}/>
        </div>
    );
};

export default Dialogs