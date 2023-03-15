import React from 'react';
import s from './MyPost.module.css';
import Post from "./Post/Post";

const MyPost = () => {
    let postData = [
        {id:1, message:"Hi, how are you?", like: 24},
        {id:2, message:"hello world", like:13}
    ]
    return (
        <div>
            <div className={s.item}>
                My post
            </div>
            <div className={s.item}>
                New post
            </div>
            <div className={s.post}>
                <Post id={postData[0].id} message={postData[0].message} like={postData[0].like} />
                <Post id={postData[1].id} message={postData[1].message} like={postData[1].like}/>
            </div>
        </div>
    );
}
export default MyPost;