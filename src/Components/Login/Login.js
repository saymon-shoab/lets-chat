import React from 'react';
import './Login.css'
import logo from '../../image/download.png'
import { Button } from '@material-ui/core';
import { auth, provider } from '../Firebase/Firebase';
const Login = () => {
    // const auth = firebase.auth();
    const signIn = () =>{
        auth.signInWithPopup(provider).catch((error)=> alert(error.message));
    };
    return (
        <div className="login">
            <div className="login_loo">
                <img src={logo} alt="" />
                <h1>Lets Chat</h1>
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    );
};

export default Login;