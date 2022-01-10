import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {
    
    return <header className={s.header}>
        <img src='https://www.import.io/wp-content/uploads/2017/10/React-logo-300x140.png' />

        <div className={s.loginBlock}>
            { props.isAuth 
                ? <div>props.login - <button onClick={props.logout}>Log out</button> </div>
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>
}

export default Header;