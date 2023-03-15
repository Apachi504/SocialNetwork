import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const inActive = ({isActive}) => {
    return isActive ? s.active : s.dialogsItems;
};
const DialogItems = (props) => {
    return (
        <div className={s.dialog}>
            <NavLink to={"/dialogs/" + props.id} className={inActive}> {props.name} </NavLink>
        </div>
    );
};
const MessageItems = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItems name="Vlad" id="1"/>
                <DialogItems name="Evgenie" id="2"/>
                <DialogItems name="Victor" id="3"/>
                <DialogItems name="Sveta" id="4"/>
                <DialogItems name="Nastya" id="5"/>
                <DialogItems name="Vlad" id="6"/>
            </div>
            <div className={s.messages}>
                <MessageItems message='hi'/>
            </div>
        </div>
    );
}

export default Dialogs;
