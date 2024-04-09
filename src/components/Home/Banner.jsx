import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/Blessed Mobiles Logo (1).png'

const Banner = () => {
  return (
    <div id='hero'>
          <div className="img">
            <img src={logo} alt="" />
          </div>
          <p>"Connecting Everyone to the World"</p>
        <div className="btn-wrap">
          <button className='btn'><Link to="https://drive.google.com/file/d/1g6Ior2F0ruARlG6_HUPcFLsREvxJPOQH/view?usp=drive_link">Download Catalogue!</Link></button>
          <button className='btn'><Link to="/products">Our Products</Link></button>
        </div>
    </div>
  )
}

export default Banner