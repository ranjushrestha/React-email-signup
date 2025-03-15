
import { useState } from 'react'

 function LoginSignup() {
    const [isLogin, setIsLogin] = useState(true);
  return (
    <div className='container'>
        <div className='form-container'>
            <div className='form-toggle'> 
            <button className={isLogin ? 'active' : ""} onClick={() => setIsLogin(true)}>Login</button>
            <button className={!isLogin ? 'active' : ""} onClick={() => setIsLogin(false)}>Signup</button>
            </div>
            {isLogin ? <>
            <div className="form">
                <h2>Login</h2>
                <input type="email"  placeholder='Email'/>
                <input type="password"  placeholder='Password'/>
                <a href="#">Forgot Password?</a>
                <button>Login</button>
                <p>Not a member? <a href="#" onClick={() => setIsLogin(false)}>signup now</a></p>
            </div>
            
            </> : <>
            <div className='form'>
            <h2>Signup</h2>
                <input type="email"  placeholder='Email'/>
                <input type="password"  placeholder='Password'/>
                <input type="password"  placeholder='confirm Password'/>
                <button>Signup</button>
                </div>
                </>}
         </div>
    </div>
  )
}

export default LoginSignup 