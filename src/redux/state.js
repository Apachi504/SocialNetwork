let state = {
    profilePage: {
        postData: [
            {id: 1, message: "Hi, how are you?", like: 24},
            {id: 2, message: "hello world", like: 13}
        ]
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
export let addPost = (postMessage) => {
    debugger;
    let newPost = {
        id: 5,
        message: postMessage,
        like: 6
    };
    state.profilePage.postData.push(newPost);
}
export default state;