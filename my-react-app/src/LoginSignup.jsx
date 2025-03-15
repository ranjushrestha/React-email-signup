
import { useState } from 'react'

 function LoginSignup() {
    const [isLogin, setIsLogin] = useState(true);
    const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword); // Toggle confirm password visibility
  };
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
                <input
              type={showPassword ? 'text' : 'password'} // Toggle password visibility
              placeholder='Password'
            />
            <label className='show-password-label'>
              <input
                type='checkbox'
                checked={showPassword}
                onChange={togglePasswordVisibility}
              />
              Show Password
            </label>
                
                <a href="#">Forgot Password?</a>
                <button>Login</button>
                <p>Not a member? <a href="#" onClick={() => setIsLogin(false)}>signup now</a></p>
            </div>
            
            </> : <>
            <div className='form'>
            <h2>Signup</h2>
                <input type="email"  placeholder='Email'/>
                <input
              type={showPassword ? 'text' : 'password'} // Toggle password visibility
              placeholder='Password'
            />
            <input
              type={showPassword ? 'text' : 'password'} // Toggle confirm password visibility
              placeholder='Confirm Password'
            />
            <label className='show-password-label'>
              <input
                type='checkbox'
                checked={showPassword}
                onChange={togglePasswordVisibility}
              />
              Show Password
            </label>
                <button>Signup</button>
                </div>
                </>}
         </div>
    </div>
  )
}

export default LoginSignup 