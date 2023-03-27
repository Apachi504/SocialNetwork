import React from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = (props) => {

    let postElements = props.postData
        .map(p => <Post id={p.id} message={p.message} like={p.like} />)
    return (
        <div>
            <div className={s.item}>
                My post
            </div>
            <div className={s.item}>
                New post
            </div>
            <div className={s.post}>
                {postElements}
            </div>
        </div>
    );
}
export default MyPost;