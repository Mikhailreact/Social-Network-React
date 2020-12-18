let rerenderEntireTree = () => {
    console.log('State is change');
}


let state = {
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
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer; // Мы переприсвоили действие функции и теперь она вызывает запуск rerenderEntireTree в index.js , котороя в свою очередь запускает отррисовку App.
}
// observer == addEventListener
// observer - наблюдатель

export default state;
