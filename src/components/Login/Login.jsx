import React from "react";
import { reduxForm, Field } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";

const LoginForm = (props) => {
    //handleSubmit прокидывает redux-form
    return (
        <form onSubmit={props.handleSubmit}> 
            <div>
                <Field component={Input} name={"login"} placeholder={"Login"}
                validate={[required]}
                />
            </div>
            <div>
                <Field component={Input} name={"password"} placeholder={"Password"}
                validate={[required]}
                />
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({
    form: 'login' // уникальное имя для формы в стэйте
}) (LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => { // передадим данные из redux-form внутрь к нашей компоненте
        console.log(formData);
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
      </div>  
}

export default Login;