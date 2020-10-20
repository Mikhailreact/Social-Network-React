import React from 'react';
import s from './Posts.module.css'

const Posts = (props) => {

    console.log(props.massage);

    return (
        <div className={s.item}>
            <img src={"https://b1.filmpro.ru/c/272803.700xp.jpg"} alt={'Картинка'} href="https://b1.filmpro.ru/c/272803.700xp.jpg"/>
            {props.massage}
            <div>
                <span>Like</span> { props.likesCount }
            </div>


        </div>
    )
}

export default Posts;

