import React from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className='bg-yellow-600 text-lime-50 py-10'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between items-center px-6 md:px-12'>
        
        {/* Customer Care and Gautam Combined */}
        <div className='text-center md:text-left mb-8 md:mb-0'>
          <h2 className='font-bold text-3xl mb-4 text-white'>Customer Care</h2>
          <p className='text-xl mb-1  font-bold hover:text-lime-200 cursor-pointer'>Help Center</p>
          <p className='text-xl mb-1 hover:text-lime-200 cursor-pointer'>Returns And Refunds</p>
          <p className='text-xl mb-1 hover:text-lime-200 cursor-pointer'>About Gautam</p>
          <p className='text-xl mb-1 hover:text-lime-200 cursor-pointer'>Careers</p>
        </div>

        {/* Contact Section */}
        <div className='text-center md:text-left mb-8 md:mb-0'>
          <h2 className='font-bold text-3xl mb-4'>Contact</h2>
          <p className='text-xl mb-2 flex justify-center md:justify-start items-center'>
            <FaPhoneAlt className='mr-2' /> +977-1-4117578
          </p>
          <p className='text-xl mb-2 flex justify-center md:justify-start items-center'>
            <FaPhoneAlt className='mr-2' /> 9841002000
          </p>
          <p className='text-xl mb-2 flex justify-center md:justify-start items-center'>
            <FaEnvelope className='mr-2' /> Inquiry Hotline: 984100200
          </p>
        </div>

        {/* Location Section */}
        <div className='text-center md:text-left'>
          <h2 className='font-bold text-3xl mb-4'>Location</h2>
          <p className='text-xl mb-2 flex justify-center md:justify-start items-center'>
            <FaMapMarkerAlt className='mr-2' /> Janakitole, Mahendranagar
          </p>
          <p className='text-xl mb-2'>Kanchanpur 10800, Nepal</p>
          <p className='text-xl mb-2 flex justify-center md:justify-start items-center'>
            <FaEnvelope className='mr-2' />Email: hrkshnagtm@gmail.com
          </p>
        </div>
      </div>
      
      <hr className='my-6 border-t-4 border-lime-50 w-full mx-auto' />

      <p className='text-center text-2xl py-2'>
        © 2024 Gautam Store. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
