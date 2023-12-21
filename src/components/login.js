import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Authentication() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false); // Track whether registration form is active
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Handle login logic here
    if (email === 'admin101' && password === 'admin101') {
      navigate('/home'); // Redirect to the homepage upon successful login
    } else {
      setErrorMessage('Invalid email or password.'); // Display an error message for unsuccessful login
    }
  };

  const handleRegistration = () => { 
    setIsRegistering(false); // Switch back to the login form after successful registration
    setErrorMessage('Registration successful. You can now log in.'); // Display a success message
  };

  return (
    <div>
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
      <div>
        <label>Email:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Update the email state based on user input
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Update the password state based on user input
        />
      </div>
      {isRegistering ? (
        <button onClick={handleRegistration}>Register</button> // Call handleRegistration when the "Register" button is clicked
      ) : (
        <button onClick={handleLogin}>Login</button> // Call handleLogin when the "Login" button is clicked
      )}
      <button onClick={() => setIsRegistering(!isRegistering)}>
        {isRegistering ? 'Switch to Login' : 'Switch to Register'} {/* Toggle between "Switch to Login" and "Switch to Register" based on the current form */}
      </button>
      {errorMessage && <p>{errorMessage}</p>} {/* Display the error or success message */}
    </div>
  );
}

export default Authentication;
