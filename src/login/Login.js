import React from 'react'
import './Login.css'
import {Link, useHistory} from "react-router-dom"
import {useState} from 'react';
import { auth } from './firebase';
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn =  e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password).then(auth => {
            history.push('/')
        })
        .catch(error => alert(error.message))
    }
    const register = e =>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password).then((auth) => {
            console.log(auth);
            if (auth){
                history.push('/')
            }

        })
        .catch(error => alert(error.message))
        
    }
    return (
        <div className = "login">
            <Link to ='/'>
            <img
                className = "login_logo"
                src = "https://ir.ebaystatic.com/cr/v/c1/ebay-logo-1-1200x630-margin.png'"
            />
            </Link>
            <div className = "login_border">
                <h1>Sign In</h1>

                <form>
                    <h5>Email</h5>
                    <input value = {email} onChange = {e => setEmail(e.target.value)}/>

                    <h5>Password</h5>
                    <input type = "password" value = {password} onChange = {e => setPassword(e.target.value)}/>
                    <button type = "submit" onClick = {signIn} className = "sign_in">Sign In</button>
                </form>
                <p>
                    By signing in you agree to eBay User Agreement, Privacy, and AdChoice
                </p>
                <button onClick = {register} className = "register_button">Create an Account</button>
            </div> 
        </div>
    )
}

export default Login
