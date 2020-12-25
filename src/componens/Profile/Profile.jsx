import React from 'react';
import ProfileInfo from "./MyPosts/ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}
                              /*posts={props.profilePage.posts}
                              newPostText={props.profilePage.newPostText}
                              dispatch={props.dispatch}*/
            />
        </div>

    )
}

export default Profile;