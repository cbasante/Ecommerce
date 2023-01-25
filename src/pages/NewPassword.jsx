import React from 'react';
import '@styles/NewPassword.scss';

const NewPassword = () => {
  return (
    <div className="NewPassword">
        <div className="form-container">
            <img src="https://freesvg.org/img/ethereum-classNameic-logo.png" alt="logo" className="logo"/>

            <h1 className="title">Create a new password</h1>
            <p className="subtitle">Enter a new password for your account</p>

            <form action="/" className="form">
                <label for="password" className="label">Password</label>
                <input type="password" id="password" placeholder="*********" className="input input-password"/>
                <label for="password" className="label">Re-enter password</label>
                <input type="password" id="new-password" placeholder="*********" className="input input-password"/>
                
                <input type="submit" value="Confirm" className="primary-button NewPassword-button"/>
            </form>
        </div>
    </div>
  )
}

export default NewPassword