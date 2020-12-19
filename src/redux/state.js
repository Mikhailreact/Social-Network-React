let store = {
    _state:  {
        profilePage: {
            posts: [{id: 1, message: 'Hi, how are you?', likesCount: 12},
                {id: 2, message: 'It\'s my first post', likesCount: 11},
                {id: 2, message: 'blabla', likesCount: 1100},
                {id: 2, message: 'dada', likesCount: 11},],
            newPostText: '',

        },
        dialogsPage: {
            dialogs: [{id: 1, name: 'Dimych'},
                {id: 2, name: 'Andrey'},
                {id: 3, name: 'Sveta'},
                {id: 4, name: 'Sasha'},
                {id: 5, name: 'Viktor'},
                {id: 6, name: 'Valera'}],
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How is your it-kamasutra?'},
                {id: 3, message: 'yo'},
                {id: 4, message: 'yo'},
                {id: 5, message: 'yo'}
            ]
        },
        sidebar: {}
    },
    _callSubscriber()  {
        console.log('State is change');
    },

    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // Мы переприсвоили действие функции и теперь она вызывает запуск rerenderEntireTree в index.js , котороя в свою очередь запускает отррисовку App.
    },

    dispatch(action){ // { type: 'ADD-POST' }
        if(action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
            // Логика по добавлению поста
        } else if(action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
            // Логика по обнавлению при каждом вводе
        }
    } // Чтобы изменить стейт из внешнего мира мы дергаем диспач
}

// observer == addEventListener
// observer - наблюдатель

window.store = store;

export default store;
