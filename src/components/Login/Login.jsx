import React from "react";
import { reduxForm, Field } from "redux-form";

const LoginForm = (props) => {
    //handleSubmit прокидывает redux-form
    return (
        <form onSubmit={props.handleSubmit}> 
            <div>
                <Field component={"input"} name={"login"} placeholder={"Login"}/>
            </div>
            <div>
                <Field component={"input"} name={"password"} placeholder={"Password"}/>
            </div>
            <div>
                <Field component={"input"} name={"rememberMe"} type={"checkbox"} /> remember me
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