import React from 'react';
import { NavLink } from 'react-router';

function Navbar() {
  return (
    <nav className='flex gap-5 justify-center shadow py-2'>
      <NavLink
        className='text-purple-600 hover:scale-[1.5] transition-all'
        to='/'
      >
        Home
      </NavLink>
      <NavLink
        className='text-purple-600 hover:scale-[1.5] transition-all'
        to='/about'
      >
        About
      </NavLink>
    </nav>
  );
}

export default Navbar;
