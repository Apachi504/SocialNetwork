import React from 'react';
import s from './Post.module.css';

const Post = (props) =>{
    return(
        <div className={s.item}>
            <img src="https://cdn140.picsart.com/302578769022201.jpg" alt="avatar"/>
            {props.message}
            <div>
                <span>{props.like} like</span>
            </div>
        </div>
    );
}
export default Post;