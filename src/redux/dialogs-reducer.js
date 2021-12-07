const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }],
                newMessageBody: '',
            }
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({     
    type: SEND_MESSAGE
});

export const updateNewMessageBodyCreator = (body) => ({    
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body,    
});

export default dialogsReducer;