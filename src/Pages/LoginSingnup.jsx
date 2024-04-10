import React from 'react';
import '../Components/CSS/Login.css';

const LoginSingnup = () => {
    return (
        <div className='loginSignup'>
            <div className="loginSignupContainer">
                <h1>Sing up</h1>
                <div className='loginSignupFields'>
                    <input type="text" placeholder='Your name' />
                    <input type="email" placeholder='Email Address'/>
                    <input type="password" placeholder='Password'/>
                </div>
                <button>Continue</button>
                <p className="loginSignupLogin">Already have an account? <span>Login here</span></p>
                <div className='loginSignupAgree'>
                    <input type='checkbox' name='' id=''/>
                    <p>By continuing, i agree to the tersms of use & privacy policy.</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSingnup;