import React from 'react';
import s from './Profile.module.css';
import MyPostContainer from "./MyPost/MyPostContainer";
// import {updateNewPostText} from "../../redux/redux-store";

const Profile = (props) => {
debugger;
    return (
        <div className={s.content}>
            <div>
                <img src='https://w-dog.ru/wallpapers/9/0/451911293080387/palmy-mostik-okean.jpg' alt="bg"/>
            </div>
            <div>
                avatar + description
            </div>

            <MyPostContainer store={props.store}/>
        </div>
    );
}
export default Profile;
