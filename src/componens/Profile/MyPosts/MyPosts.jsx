import React from 'react';
import s from './MyPosts.module.css'
import Posts from "./Post/Post";
import Like from "./Post/like";

const MyPosts = () => {
    return (
        <div>
            My post, New post, Туго но получается, Слав Богу!!!
            <div>

                <textarea></textarea>
                <button>Ass post</button>
                <button>Remove</button><br/>

            </div>
            <div className={s.posts}>
               <Posts massage='Hi, how are you?' likesCount='0'/>
               <Posts massage="It's my first post" likesCount='23'/>
            </div>

        </div>

)
}

export default MyPosts;

