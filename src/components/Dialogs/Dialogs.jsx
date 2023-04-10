    import React from 'react';
    import s from './Dialogs.module.css';
    import DialogItems from "./DialogItems/DialogsItems";
    import MessageItems from "./Message/Message";

    const Dialogs = (props) => {


        let dialogsElements = props.state.dialogs
            .map(d => <DialogItems id={d.id} name={d.name}/>);

        let messageElements = props.state.messages
            .map(m => <MessageItems id={m.id} message={m.message}/>);

    let newTextElement = React.createRef();

    let addNewMessages = () => {
        let text = newTextElement.current.value;
        alert(text);
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
                <textarea ref={newTextElement}></textarea>
            </div>
            <button onClick={addNewMessages}>отправить</button>
        </div>
    );
}

export default Dialogs;
