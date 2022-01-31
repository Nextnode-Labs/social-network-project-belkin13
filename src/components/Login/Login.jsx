import React from "react";
import { reduxForm, Field } from "redux-form";
import { required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import styles from "../common/FormsControls/FormsControls.module.css";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import { Redirect } from "react-router-dom";
import { createField } from "../common/FormsControls/FormsControls";

const LoginForm = ({handleSubmit, error, captchaUrl}) => {
    //handleSubmit прокидывает redux-form
    return (
        <form onSubmit={handleSubmit}> 
            
            {createField("Email", "email",[required], Input)} 
            {createField("Password", "password",[required], Input, {type: "password"})}
            {createField(null, "rememberMe",[], Input, {type: "checkbox"}, "remember me")}

            {captchaUrl && <img src={captchaUrl} />}
            {captchaUrl && createField("Symbols from image","captcha",[required], Input, {})};


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

        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha)
        //console.log(formData);
    }

    if  (props.isAuth) {
        return <Redirect to={"/profile"} />
    }

    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} />
      </div>  
}

const mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {login}) (Login);