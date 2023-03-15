import React from 'react';
import s from './Profile.module.css';
import MyPost from "./MyPost/MyPost";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://w-dog.ru/wallpapers/9/0/451911293080387/palmy-mostik-okean.jpg' alt="bg"/>
            </div>
            <div>
                avatar + description
            </div>
            <MyPost/>
        </div>
    );
}
export default Profile;