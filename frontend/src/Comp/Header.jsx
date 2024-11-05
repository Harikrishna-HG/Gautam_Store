import {useState}  from 'react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './Home';
import Category from '../Category';
import Details from '../Details';
import Login from './Login';
import Signup from './Signup';
import Blog from './Blog';
import About from './About';
import { FaShoppingCart } from 'react-icons/fa';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState(0); // Keep track of cart items
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false); // Clear login status
    navigate('/'); // Navigate to home after logout
  };

  return (
    <>
      <header className='bg-white  text-lime-50 text-center '>
        <div className='container mx-auto px-2 flex justify-between items-center '>
          <h2 className='w-[120px] font-semibold text-3xl text-black text-center'>GAUTAM</h2>
          <marquee className="abc text-yellow-600 font-bold text-2xl" direction="left">Elevating Your Online Shopping Experience     |      Elevating Your Online Shopping Experience</marquee>
          <div className='relative'>
          <h3 className='font-semibold text-3xl text-black py-4 flex items-center'>
              Cart
              <FaShoppingCart className='ml-2' /> {/* Cart icon next to "Cart" text */}
            </h3>
            {cartItems > 0 && (
              <span className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
                {cartItems}
              </span>
            )}
          </div>
        </div>
      </header>

      <nav className='navbar bg-yellow-500 py-10'>
        <ul className='flex justify-center gap-10 text-white text-2xl font-semibold'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          {isLoggedIn ? (
            <li>
              <button onClick={handleLogout} className="text-white">Logout</button>
            </li>
          ) : (
            <>
              <li><Link to="/login">Login</Link></li>
            </>
          )}
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home setCartItems={setCartItems} />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/cat/:cid" element={<Category />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default Header;
