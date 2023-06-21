import React from 'react';
import s from './Profile.module.css';
import MyPost from "./MyPost/MyPost";
// import {updateNewPostText} from "../../redux/store";

const Profile = (props) => {

    return (
        <div className={s.content}>
            <div>
                <img src='https://w-dog.ru/wallpapers/9/0/451911293080387/palmy-mostik-okean.jpg' alt="bg"/>
            </div>
            <div>
                avatar + description
            </div>

            <MyPost postData={props.profilePage.postData} newPostText={props.profilePage.newPostText}
                    dispatch={props.dispatch}/>
        </div>
    );
}
export default Profile;
