import React, { useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

function Signup({ setIsLoggedIn }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username && email && password) {
      try {
        // Send data to the backend to store in MongoDB
        const response = await fetch('http://localhost:5000/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, email, password }),
        });

        const data = await response.json();
        
        if (response.ok) {
          setIsLoggedIn(true);
          navigate('/'); 
          alert("User Created Successfully");// Redirect to the homepage or dashboard
        } else {
          alert(data.error); // Show the error from the backend
        }
      } catch (error) {
        alert('User Created Successfully');
      }
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <div className="container mx-auto py-16">
      <div className=''>
        <form onSubmit={handleSubmit} className="border-4 border-[#FF7602] py-8 px-8 max-w-md mx-auto bg-white p-5 shadow-lg">
          <h2 className="text-3xl font-bold text-center mb-8">Sign Up</h2>

          {/* Username Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-4 border border-gray-300 text-xl rounded"
              placeholder="Enter username"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 border border-gray-300 text-xl rounded"
              placeholder="Enter email"
            />
          </div>

          {/* Password Field */}
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

          {/* Signup Button */}
          <button type="submit" className="bg-[#FF7602] hover:border-[#FF7602] border-4 w-full py-2 mt-8 text-2xl text-white font-bold rounded hover:bg-white hover:text-[#f08427]">
            Sign Up
          </button>

          {/* Already Have an Account Link */}
          <NavLink
            to='/login'
            className="bg-[#FF7602] hover:border-[#FF7602] border-4 w-full py-2 mt-8 text-2xl text-white font-bold rounded hover:bg-white hover:text-[#f08427] text-center block"
          >
            Already have an account? Login
          </NavLink>

        </form>
      </div>
    </div>
  );
}

export default Signup;
