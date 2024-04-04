import React from 'react';
import data from '../../../data/db';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const LatestProduct = () => {
    return (
        <div id='latest'>
            <h2>Here's our Latest Products</h2>
            <div className="wrapper">
                {data.latest && data.latest.map(product => {
                    return (
                        <div className="card">
                            <div className="img">
                                <img src={product.image} alt="" />
                            </div>
                            <div className="textBox">
                                <h3>{product.phone}</h3>
                                <div className="specs">
                                    <div className="spec">
                                        <h4>STORAGE</h4>
                                        <p>{product.storage}</p>
                                    </div>
                                    <div className="spec">
                                        <h4>RAM</h4>
                                        <p>{product.ram}</p>
                                    </div>
                                    <div className="spec">
                                        <h4>BATTERY</h4>
                                        <p>{product.battery}</p>
                                    </div>
                                </div>
                                <div className="req">
                                    <p>${product.price}</p>
                                    <button><FontAwesomeIcon className='icon' icon={faWhatsapp} /><a href="">Request</a></button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <button className='btn'><Link to="/products">View All Products</Link></button>
        </div>
    );
};

export default LatestProduct;