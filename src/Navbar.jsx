import React from 'react';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  
  return (
    // main...
    <nav className="navbarDisp" style={{ display: 'flex', marginTop: '0px', justifyContent: 'flex-end' }}>
      <div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ width: '100%' }}>
            <button className='appHome' style={{ width: '100%' }} onClick={() => navigate('/Home')}>Home</button>
          </div>
          <div style={{ width: '100%' }}>
            <button className='appAbout' style={{ width: '100%' }} onClick={() => navigate('/about')}>About</button>
          </div>
          <div style={{ width: '100%' }}>
            <button className='appProducts' style={{ width: '100%' }} onClick={() => navigate('/Products')}>Products</button>
          </div>
          <div style={{ width: '100%' }}>
            <button className='appCart' style={{ width: '100%' }} onClick={() => navigate('/Cart')}>Cart</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
