import {rerenderEntireTree} from "../render";

let state = {
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

}
window.state = state;
export let addPost = () => {
    let newPost = {
        id: state.profilePage.postData.length+1,
        message: state.profilePage.newPostText,
        like: 6
    };
    state.profilePage.postData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}
export let updateNewPostText = (newPostText) => {

    state.profilePage.newPostText = newPostText;
    rerenderEntireTree(state);
}
export default state;