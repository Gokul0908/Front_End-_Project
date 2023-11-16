// Header.js

import React from 'react';
import { BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify } from 'react-icons/bs';

const Header = () => {
  return (
    <header className='header'>
      <div className='menu-icon'>
        <BsJustify className='icon' />
      </div>
      {/* <div className='header-left'>
        <BsSearch className='icon' />
      </div> */}
      <div className='header-right'>
        <span className='admin-text'>
          Admin<BsPersonCircle className='icon mr-2' />
        </span>
      </div>
    </header>
  );
};

export default Header;