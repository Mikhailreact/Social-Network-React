import React from 'react';
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
            <div>
                <img alt="Картинка!" src="https://www.iexpats.com/wp-content/uploads/2017/11/paradise-island.jpg"/>
            </div>
            <div>
                Ava + description
            </div>
            <MyPosts/>
        </div>

    )
}

export default Profile;