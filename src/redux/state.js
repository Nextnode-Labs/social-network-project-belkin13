//import {rerenderEntireTree} from "../render";

let rerenderEntireTree = () => {
    console.log('Rerender!!!')
};


let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 11},
            {id: 3, message: 'Blablabla', likesCount: 11},
            {id: 4, message: 'Blobloblo', likesCount: 10},
        ],
        newPostText: "start message",
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, name: "Dima"},
            {id: 2, name: "Lev"},
            {id: 3, name: "Cat"},
            {id: 4, name: "Ilia"},
            {id: 5, name: "Andrey"},
            {id: 6, name: "Sasha"},
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "How is it?"},
            {id: 3, message: "Yo"},
            {id: 4, message: "Yo"},
            {id: 5, message: "Hi"},
            {id: 6, message: "By"},
        ] 
    }
}

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
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
    rerenderEntireTree = observer;
}


export default state;