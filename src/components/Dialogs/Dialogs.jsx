    import React from 'react';
    import s from './Dialogs.module.css';
    import DialogItems from "./DialogItems/DialogsItems";
    import MessageItems from "./Message/Message";
    import {addMessageBodyActionCreator, updateNewMessageBodyActionCreator} from "../../redux/messagesReducer";

    const Dialogs = (props) => {
        let state = props.messagesPage;

        let dialogsElements = state.dialogs
            .map(d => <DialogItems id={d.id} name={d.name}/>);

        let messageElements = state.messages
            .map(m => <MessageItems id={m.id} message={m.message}/>);

    let newTextElement = React.createRef();

    let onAddNewMessages = () => {
        props.sendMessages();
    }
    let onNewMessageChange = (e) =>{
        let body =e.target.value();
        props.updateNewMessageBody(body);
        // props.dispatch(updateNewMessageBodyActionCreator(text));
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <div>
                <textarea onChange={onNewMessageChange} ref={newTextElement} rows="10" cols="30" value={props.newMessageBody}/>
                <button onClick={onAddNewMessages}>отправить</button>
            </div>
        </div>
    );
}

export default Dialogs;
