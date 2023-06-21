    import React from 'react';
    import s from './Dialogs.module.css';
    import DialogItems from "./DialogItems/DialogsItems";
    import MessageItems from "./Message/Message";
    import {addMessageBodyActionCreator, updateNewMessageBodyActionCreator} from "../../redux/messagesReducer";

    const Dialogs = (props) => {


        let dialogsElements = props.state.dialogs
            .map(d => <DialogItems id={d.id} name={d.name}/>);

        let messageElements = props.state.messages
            .map(m => <MessageItems id={m.id} message={m.message}/>);

    let newTextElement = React.createRef();

    let addNewMessages = () => {
        props.dispatch(addMessageBodyActionCreator());
    }
    let onMessageChange = () =>{
        let text = newTextElement.current.value;
        props.dispatch(updateNewMessageBodyActionCreator(text));
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
                <textarea onChange={onMessageChange} ref={newTextElement} rows="10" cols="30" value={props.newMessageBody}/>
                <button onClick={addNewMessages}>отправить</button>
            </div>
        </div>
    );
}

export default Dialogs;
