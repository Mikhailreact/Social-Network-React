import React from 'react';
import s from './MyPosts.module.css'
import Posts from "./Post/Post";
import Like from "./Post/like";

const MyPosts = (props) => {

    let postsElements =
        props.posts.map( p => <Posts massage={p.message} likesCount={p.likesCount}/>);

    return (
        <div className={s.postsBock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Ass post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>

        </div>

    )
}

export default MyPosts;

