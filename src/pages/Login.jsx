import React, { useRef } from 'react';
import '@styles/Login.scss';

const Login = () => {
    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            username: formData.get('email'),
            password: formData.get('password')
        };
        console.log(data);
    }

    return (
        <div className="Login">
        <div className="Login-container">
            <img src="https://freesvg.org/img/ethereum-classNameic-logo.png" alt="logo" className="logo"/>
            <form action="/" className="form" ref={form}>
                <label for="email" className="label">Email address</label>
                <input type="texto" name="email" placeholder="camilayokoo@gmail.com" className="input input-email"/>
                <label for="password" className="label">Password</label>
                <input type="password" name="password" placeholder="*********" className="input input-password"/>
                <input type="submit" value="Log in" className="primary-button login-button"/>
                <a href="/">Forgot my password</a>
            </form>    
            <button className="secondary-button singup-button" onClick={handleSubmit}>
                Sing up
            </button>
        </div>
    </div>
    )
}

export default Login;