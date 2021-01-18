import {NavLink} from "react-router-dom";
import  s from "./DialogItem.module.css"

const DialogItem = (props) => {
    let className = s.dialogItem
    if (props.active) {
        className = className + ' ' + s.active
    }

    return (
        <div className={className}>
            <NavLink to={`/messages/${props.id}`}>{props.name}</NavLink>
        </div>
    );
};

export default DialogItem;