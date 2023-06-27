import React from 'react';
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/ProfileReducer";
import MyPost from "./MyPost";


const MyPostContainer = (props) => {

 let state = props.store.getState().profilePage;

    let addPost = () => {
        props.store.dispatch(addPostActionCreator());

    }
    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }
    return (<MyPost updateNewPostText={onPostChange}
                   addPost={addPost}
                   posts={state.postData}
                   newPostText={state.newPostText}
    />)
}
export default MyPostContainer;