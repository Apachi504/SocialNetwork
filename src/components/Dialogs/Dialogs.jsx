import React from 'react';
import s from './Dialogs.module.css';
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
const MessageItems = (props) => {
    return (
        <div className={s.dialog}>{props.message}</div>
    )
}

const Dialogs = () => {
    let dialogs = [
        {id: 1, name: 'Vlad'},
        {id: 2, name: 'Evgenie'},
        {id: 3, name: 'Victor'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Nastya'},
        {id: 6, name: 'Vlad'}
    ]
    let dialogsElements = dialogs
        .map(d => <DialogItems id={d.id} name={d.name}/>);

    let messages = [
        {id: 1, message: 'HI how are you?'},
        {id: 2, message: 'Whats up you?'},
        {id: 3, message: 'Whats up man?'},
        {id: 4, message: 'I am fine'},
        {id: 5, message: 'and u?'},
        {id: 6, message: 'good'}
    ]
    let messageElements = messages
        .map(m => <MessageItems id={m.id} message={m.message}/>);
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );
}

export default Dialogs;
