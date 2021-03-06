import React from 'react';
import s from './MyPosts.module.css'
import Posts from "./Post/Post";
import state, {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    let postsElements =
        props.posts.map( p => <Posts massage={p.message} likesCount={p.likesCount}/>);

    let newPostElement = React.createRef(); //Через рефы обращаемся к value

window.state = state;

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.postsBock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={ onPostChange } ref={newPostElement} value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={ onAddPost }>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElements }
            </div>

        </div>

    )
}

export default MyPosts;

