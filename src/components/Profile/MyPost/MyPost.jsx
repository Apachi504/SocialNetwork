import React from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = (props) => {
    let state = props.profilePage;
    let postElements = state.postData
        .map(p => <Post id={p.id} message={p.message} like={p.like}/>);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();

    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
        // props.dispatch(updateNewPostTextActionCreator(text));
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
                <button onClick={onAddPost}>add post</button>
            </div>
        </div>
        <div className={s.post}>
            {postElements}
        </div>
    </div>);
}
export default MyPost;