import ProfileReducer from "./ProfileReducer";
import messagesReducer from "./messagesReducer";

let store = {
    _state: {
        profilePage: {
            postData: [
                {id: 1, message: "Hi, how are you?", like: 24},
                {id: 2, message: "hello world", like: 13}
            ],
            newPostText: 'it-camasutra.com'
        },
        messagesPage: {
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

    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = ProfileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;
