import React from 'react';
import s from './MyPosts.module.css'

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
                <div className={s.item}>
                    <img src="https://b1.filmpro.ru/c/272803.700xp.jpg"/>
                </div>
                <div className={s.item}>Post2</div>
                <div className={s.item}>Post3</div>
                <div className={s.item}>Post4</div>
                <div className={s.item}>Post5</div>
                <div className={s.item}>Post6</div>
            </div>
        </div>

)
}

export default MyPosts;

/*<div className={s.item}>
        post1
    </div>
    <div className={s.item}>
        post2
    </div>*/