import { useState } from 'react'
import './App.css'
import LoginSignup from './LoginSignup'
// import Signup from './Signup';
// import Login from './Login';

function App() {
  const [count, setCount] = useState(0)

  const handleLogin = () => {
    setIsLoggedIn(true);
};

  return (
  <>
  <div>
    <LoginSignup/>
    </div>

    {/* <div>
            <h1>User Authentication</h1>
            {!isLoggedIn ? (
                <>
                    <Signup />
                    <Login onLogin={handleLogin} />
                </>
            ) : (
                <p>Welcome! You are logged in.</p>
            )}
        </div> */}

    </>
  )
}

export default App
