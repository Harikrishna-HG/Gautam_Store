import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';


function Login({ setIsLoggedIn }) {
  const [usernameOrEmail, setUsernameOrEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setErrorMessage('');

    if (usernameOrEmail && password) {
      try {
        const response = await fetch('http://localhost:5000/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ usernameOrEmail, password }),
        });

        const data = await response.json();

        if (response.ok) {
          // Show toast notification on successful login
          alert(`Welcome, ${data.message.split(',')[1].trim()}!`);

          setIsLoggedIn(true);
          navigate('/');
        } else {
          setErrorMessage(data.error);
        }
      } catch (error) {
        setErrorMessage('Server error, please try again later');
      }
    } else {
      setErrorMessage('Please enter valid credentials');
    }
  };

  return (
    <div className="container mx-auto py-16">
      <div className=''>
        <form onSubmit={handleSubmit} className="border-4 border-[#FF7602] py-8 px-8 max-w-md mx-auto bg-white p-5 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Login</h2>

          {errorMessage && <p className="text-red-500 text-center mb-4">{errorMessage}</p>}

          <div className="mb-2">
            <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="usernameOrEmail">
              Username or Email
            </label>
            <input
              type="text"
              id="usernameOrEmail"
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)} 
              className="w-full p-4 border border-gray-300 text-xl rounded"
              placeholder="Enter username or email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 border border-gray-300 text-xl rounded"
              placeholder="Enter password"
            />
          </div>

          <button type="submit" className="bg-[#FF7602] hover:border-[#FF7602] border-4 w-full py-2 mt-8 text-2xl text-white font-bold rounded hover:bg-white hover:text-[#f08427]">
            Login
          </button>

          <button type="button" className="bg-[#FF7602] hover:border-[#FF7602] border-4 w-full py-2 mt-8 text-2xl text-white font-bold rounded hover:bg-white hover:text-[#f08427]">
            <NavLink to='/signup'>
              Make a new Account
            </NavLink>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
