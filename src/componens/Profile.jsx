import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
	return (
		<div className={s.content}>
			<div>
				<img alt="Картинка!" src="https://www.iexpats.com/wp-content/uploads/2017/11/paradise-island.jpg" />
			</div>
			<div>
				Ava + description
            </div>
			<div>
				My post
                <div>
					New post
                </div>
			</div>
			<div className={s.posts}>
				<div className={s.item}>
					post1
            </div>
				<div className={s.item}>
					post2
            </div>
			</div>
		</div>

	)
}

export default Profile;