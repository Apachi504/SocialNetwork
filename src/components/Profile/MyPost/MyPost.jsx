import React from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/ProfileReducer";


const MyPost = (props) => {

    let postElements = props.postData
        .map(p => <Post id={p.id} message={p.message} like={p.like}/>);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());

    }
    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }
    return (<div>
        <h3>
            My post
        </h3>
        <div>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} cols="30" rows="10" value={props.newPostText}/>
            </div>
            <div>
                <button onClick={addPost}>add post</button>
            </div>
        </div>
        <div className={s.post}>
            {postElements}
        </div>
    </div>);
}
export default MyPost;