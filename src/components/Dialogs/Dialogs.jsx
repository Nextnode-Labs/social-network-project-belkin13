import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import s from "./Dialogs.module.css";
import Message from "./Message/Message";
import { Redirect } from "react-router-dom";
import { reduxForm, Field } from "redux-form";
import { Textarea } from "../common/FormsControls/FormsControls";
import { required, maxLengthCreator } from "../../utils/validators/validators";

const maxLengt50 = maxLengthCreator(50);

const Dialogs = (props) => {
    
    let state = props.dialogsPage;

    let dialogsElements = state.dialogsData.map( d => <DialogItem name={d.name} key={d.id} id={d.id} /> );
    let messagesElements = state.messages.map( m => <Message message={m.message} key={m.id} /> );  
   // let newMessageBody = state.newMessageBody;

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };

    if (!props.isAuth) return <Redirect to="/login" />;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
               {dialogsElements}
            </div> 
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </div>   
        </div>
    )
}

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div><Field name="newMessageBody" component={Textarea} validate={[required, maxLengt50]} placeholder={"Enter your message"} /></div>    
            <div><button>Send</button></div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessageForm'}) (AddMessageForm)

export default Dialogs;