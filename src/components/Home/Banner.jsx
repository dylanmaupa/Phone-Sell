import React from 'react'
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div id='hero'>
        <div className="showcase"></div>
        <button className='btn'><Link to="https://drive.google.com/file/d/1g6Ior2F0ruARlG6_HUPcFLsREvxJPOQH/view?usp=drive_link">Download Catalogue!</Link></button>
    </div>
  )
}

export default Banner