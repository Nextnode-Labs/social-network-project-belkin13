//import {rerenderEntireTree} from "../render";

import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
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
            ],
            newMessageBody: "", 
        },
        sidebar: {}
    },
    getState() {
        //debugger;
        return this._state;
    },
    
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    _callSubscriber() {
      //  console.log('Rerender!!!')
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText(newText) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    
    dispatch(action) { // {type: 'ADD-POST', newText: 'new mwassage'}

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
        this._callSubscriber(this._state);
      
    }
}







window.store = store; //global for output in console

export default store;