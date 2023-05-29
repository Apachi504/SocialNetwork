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
        }

    },
    getState(){
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },
    addPost() {
        let newPost = {
            id: this._state.profilePage.postData.length + 1,
            message: this._state.profilePage.newPostText,
            like: 6
        };
        this._state.profilePage.postData.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newPostText) {
        this._state.profilePage.newPostText = newPostText;
        this._callSubscriber(this._state);
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    }
}
export default store;
window.store = store;
