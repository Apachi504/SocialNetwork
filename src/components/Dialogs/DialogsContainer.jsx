import React from 'react';
import {addMessageBodyActionCreator, updateNewMessageBodyActionCreator} from "../../redux/messagesReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {

    let state = props.store.getState().messagesPage;

    let addNewMessages = () => {
        props.store.dispatch(addMessageBodyActionCreator());
    }
    let onMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyActionCreator(body));
    }
    return (<Dialogs sendMessages={addNewMessages}
                    updateNewMessageBody={onMessageChange}
                    newMessageBody={state.newMessageBody}
                    dialogs={state.dialogs}
                    messages={state.messages}
    />)
}

export default DialogsContainer;
