import { useState } from 'react';

function LoginSignup() {
  const [isLogin, setIsLogin] = useState(true);
  const [showLoginPassword, setShowLoginPassword] = useState(false); // State for login password visibility
  const [showSignupPassword, setShowSignupPassword] = useState(false); // State for signup password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password visibility

  const toggleLoginPasswordVisibility = () => {
    setShowLoginPassword(!showLoginPassword); // Toggle login password visibility
  };

  const toggleSignupPasswordVisibility = () => {
    setShowSignupPassword(!showSignupPassword); // Toggle signup password visibility
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword); // Toggle confirm password visibility
  };

  return (
    <div className='container'>
      <div className='form-container'>
        <div className='form-toggle'>
          <button
            className={isLogin ? 'active' : ''}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={!isLogin ? 'active' : ''}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>

        {isLogin ? (
          // Login Form
          <div className='form'>
            <h2>Login</h2>
            <input type='email' placeholder='Email' />
            <input
              type={showLoginPassword ? 'text' : 'password'}
              placeholder='Password'
            />
            <label className='show-password-label'>
              <input
                type='checkbox'
                checked={showLoginPassword}
                onChange={toggleLoginPasswordVisibility}
              />
              Show Password
            </label>
            <a href='#'>Forgot Password?</a>
            <button>Login</button>
            <p>
              Not a member?{' '}
              <a href='#' onClick={() => setIsLogin(false)}>
                Signup now
              </a>
            </p>
          </div>
        ) : (
          // Signup Form
          <div className='form'>
            <h2>Signup</h2>
            <input type='email' placeholder='Email' />
            <input
              type={showSignupPassword ? 'text' : 'password'}
              placeholder='Password'
            />
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder='Confirm Password'
            />
            <label className='show-password-label'>
              <input
                type='checkbox'
                checked={showSignupPassword}
                onChange={toggleSignupPasswordVisibility}
              />
              Show Password
            </label>
            <label className='show-password-label'>
              <input
                type='checkbox'
                checked={showConfirmPassword}
                onChange={toggleConfirmPasswordVisibility}
              />
              Show Confirm Password
            </label>
            <button>Signup</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoginSignup;