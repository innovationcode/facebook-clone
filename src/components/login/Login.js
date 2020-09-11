import React from 'react';
import Button from '@material-ui/core/Button';

import './Login.css';

const Login = () => {
    const signIn = () => {
        //Sign In
    }

    return (
        <div className = 'login'>
            <div className = 'login__logo' style = {{ height: "10px"}} >
                <img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1024px-Facebook_f_logo_%282019%29.svg.png" alt = "facebook logo"/>
                <img src = "https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg" alt = '' />
            </div> 

            <Button type = 'submit' onClick = {signIn}>
                Sign In    
            </Button>       
        </div>
    )
}

export default Login;
