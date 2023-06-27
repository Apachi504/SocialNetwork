const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const ADD_MESSAGE_BODY = 'ADD-MESSAGE-BODY';

let initState = {
    messagesPage:{
    dialogs: [
        {id: 1, name: 'Vlad'},
        {id: 2, name: 'Evgenie'},
        {id: 3, name: 'Victor'},
        {id: 4, name: 'Sveta'},
        {id: 5, name: 'Nastya'},
        {id: 6, name: 'Vlad'}
    ],
    messages: [
        {id: 1, message: 'HI how are you?'},
        {id: 2, message: 'Whats up you?'},
        {id: 3, message: 'Whats up man?'},
        {id: 4, message: 'I am fine'},
        {id: 5, message: 'and u?'},
        {id: 6, message: 'good'}
    ],
    newMessageBody: 'Hi, how a u?'
}
}

const messagesReducer = (state = initState, action) => {
    switch (action.type) {
        case ADD_MESSAGE_BODY:
            let newMessage = {
                id: state.messages.length + 1,
                messages: state.newMessageBody,
            };
            state.messages.push(newMessage);
            state.newMessageBody = '';
            return state;
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.newMessageBody;
            return state;
        default:
            return state;
    }

}
export const addMessageBodyActionCreator = () => {
    return {
        type: ADD_MESSAGE_BODY
    }
}
export const updateNewMessageBodyActionCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        newMessageBody: text
    }
}
export default messagesReducer;