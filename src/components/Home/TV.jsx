import React from 'react';
import data from '../../../data/db';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const TV = () => {
    return (
        <div id='tv'>
            <h2>TVs</h2>
            <div className="wrapper">
                {data.tv && data.tv.map(product => {
                    return (
                        <div className="card">
                            <div className="img">
                                <img src={product.image} alt="" />
                            </div>
                            <div className="textBox">
                                <h3>{product.tv}</h3>
                                <div className="specs">
                                    <div className="spec">
                                        <h4>SIZE</h4>
                                        <p>{product.size}</p>
                                    </div>
                                    <div className="spec">
                                        <h4>RESOLUTION</h4>
                                        <p>{product.res}</p>
                                    </div>
                                    {/* <div className="spec">
                                        <h4>BATTERY</h4>
                                        <p>{product.battery}</p>
                                    </div> */}
                                </div>
                                <div className="req">
                                    <p>${product.price}</p>
                                    <button><FontAwesomeIcon className='icon' icon={faWhatsapp} /><a target='_blank' href="https://wa.link/2kjdxu">Request</a></button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TV;