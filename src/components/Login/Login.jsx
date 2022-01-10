import React from "react";
import { reduxForm, Field } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import styles from "../common/FormsControls/FormsControls.module.css";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";


const LoginForm = ({handleSubmit, error}) => {
    //handleSubmit прокидывает redux-form
    return (
        <form onSubmit={handleSubmit}> 
            <div>
                <Field component={Input} name={"email"} placeholder={"Email"}
                validate={[required]}
                />
            </div>
            <div>
                <Field component={Input} name={"password"} placeholder={"Password"} type="password"
                validate={[required]}
                />
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type={"checkbox"} /> remember me
            </div>
            { error && <div className={styles.formSummaryError}>
                { error }
            </div>}
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

        props.login(formData.email, formData.password, formData.rememberMe)
        console.log(formData);
    }

    if  (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
      </div>  
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login}) (Login);