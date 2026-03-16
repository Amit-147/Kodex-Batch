import { useState } from 'react'
import './App.css'

function App() {
  const [isSignIn, setIsSignIn] = useState(false)

  return (
    <div className="container">
      <div className="form-card">
        <h2>{isSignIn ? 'Welcome Back' : 'Create Account'}</h2>
        <p className="subtitle">
          {isSignIn ? 'Sign in to continue' : 'Fill in the details to get started'}
        </p>

        {!isSignIn && (
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>
        )}

        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" placeholder="Enter your password" />
        </div>

        <button className="submit-btn">
          {isSignIn ? 'Sign In' : 'Sign Up'}
        </button>

        <p className="toggle-text">
          {isSignIn ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span className="toggle-link" onClick={() => setIsSignIn(!isSignIn)}>
            {isSignIn ? 'Sign Up' : 'Sign In'}
          </span>
        </p>
      </div>
    </div>
  )
}

export default App
