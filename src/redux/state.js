//import {rerenderEntireTree} from "../render";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

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
        }
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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        } else if (action.type === SEND_MESSAGE) {
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.messages.push({ id: 6, message: body });
            this._state.dialogsPage.newMessageBody = '';
            this._callSubscriber(this._state);
        }
    }
}

export const addPostACtionCreator = () => ({     
    type: ADD_POST
});
  
export const updateNewPostTextActionCreator = (text) => ({    
    type: UPDATE_NEW_POST_TEXT,
    newText: text,    
});

export const sendMessageCreator = () => ({     
    type: SEND_MESSAGE
});

export const updateNewMessageBodyCreator = (body) => ({    
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,    
});



window.store = store; //global for output in console

export default store;
