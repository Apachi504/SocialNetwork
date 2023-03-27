import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const inActive = ({isActive}) => {
    return isActive ? s.active : s.dialogsItems;
};

const DialogItems = (props) => {
    let path = `/dialogs/${props.id}`;
    return (
        <div className={s.dialog}>
            <NavLink to={path} className={inActive}> {props.name} </NavLink>
        </div>
    );
};

export default DialogItems;
