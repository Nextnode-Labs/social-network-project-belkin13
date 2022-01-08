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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, { id: 6, message: body }],
            }
        default:
            return state;
    }
}

export const sendMessageCreator = (newMessageBody) => ({     
    type: SEND_MESSAGE,
    newMessageBody
});



export default dialogsReducer;