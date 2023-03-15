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

const Dialogs = () => {
    let dialogsData = [
        {id:1, name: 'Vlad'},
        {id:2, name: 'Evgenie'},
        {id:3, name: 'Victor'},
        {id:4, name: 'Sveta'},
        {id:5, name: 'Nastya'},
        {id:6, name: 'Vlad'}
    ]
    let messageData = [
        {id: 1, message:'HI how are you?'},
        {id: 2, message:'Whats up you?'},
        {id: 3, message:'Whats up man?'},
        {id: 4, message:'I am fine'},
        {id: 5, message:'and u?'},
        {id: 6, message:'good'}
    ]
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItems  id={dialogsData[0].id} name={dialogsData[0].name}/>
                <DialogItems id={dialogsData[1].id} name={dialogsData[1].name}/>
                <DialogItems id={dialogsData[2].id} name={dialogsData[2].name}/>
                <DialogItems id={dialogsData[3].id} name={dialogsData[3].name}/>
                <DialogItems id={dialogsData[4].id} name={dialogsData[4].name}/>
                <DialogItems id={dialogsData[5].id} name={dialogsData[5].name}/>
            </div>
            <div className={s.messages}>
                <MessageItems id={messageData[0].id} message={messageData[0].message}/>
                <MessageItems id={messageData[1].id} message={messageData[1].message}/>
                <MessageItems id={messageData[2].id} message={messageData[2].message}/>
                <MessageItems id={messageData[3].id} message={messageData[3].message}/>
                <MessageItems id={messageData[4].id} message={messageData[4].message}/>
                <MessageItems id={messageData[5].id} message={messageData[5].message}/>
            </div>
        </div>
    );
}

export default Dialogs;
