import React, { useState } from 'react';
import './Auth.css';

const Auth = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(true);

  const title = () => {
    return login ? 'Login' : 'Signup';
    // if login is true, return 'Login'. If login is false, return 'Signup'.
  }

  const loginToggle = (event) => {
    event.preventDefault();
    setLogin(!login);
    setEmail('');
    setPassword('');
    setFirstName('');
    setLastName('');
  }

  const signupFields = () => !login ?
    (
      <div>
        <label htmlFor="firstName">First Name:</label>
        <br />
        <input type="text" id="firstName" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
        <br />
        <label htmlFor='lastName'>Last Name:</label>
        <br />
        <input type="lastName" id="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)} />
        <br/>
      </div>
    ) : null;
  
  return (
    <div>
      <form>
        <h1>{title()}</h1>
        {signupFields()}
        <label htmlFor='email'>Email:</label>
        <br />
        <input type="text" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <br />
        <label htmlFor='password'>Password:</label>
        <br />
        <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <br />
        <button onClick={loginToggle}>Login/Signup Toggle</button>
        <br />
        <button type="submit">Submit User Data</button>
      </form>
    </div>
  );
};

export default Auth;