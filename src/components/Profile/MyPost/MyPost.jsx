import React from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = () => {
    return (
        <div>
            <div className={s.item}>
                My post
            </div>
            <div className={s.item}>
                New post
            </div>
            <div className={s.post}>
                <Post message='Hi, how are you?' />
                <Post message='hello world' />
            </div>
        </div>
    );
}
export default MyPost;