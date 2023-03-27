import React from 'react';
import s from './Dialogs.module.css';
import DialogItems from "./DialogItems/DialogsItems";
import MessageItems from "./Message/Message";

const Dialogs = (props) => {


    let dialogsElements = props.dialogs
        .map(d => <DialogItems id={d.id} name={d.name}/>);


    let messageElements = props.messages
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
