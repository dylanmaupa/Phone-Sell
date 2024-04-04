import data from '../../../data/db';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const MainProducts = () => {
    
    return (
        <div id='main-products'>
            <h2>Mobile Phones</h2>
            {data.MainProducts && data.MainProducts.map(product => {
                return (
                    <>
                        {/* <h3 className='header'>Apple</h3>
                        <div className="wrapper">
                            {product.apple && product.apple.map(item => {
                                return (
                                    <>
                                        <div className="card">
                                            <div className="img">
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className="textBox">
                                                <h3>{item.phone}</h3>
                                                <div className="specs">
                                                    <div className="spec">
                                                        <h4>STORAGE</h4>
                                                        <p>{item.storage}</p>
                                                    </div>
                                                    <div className="spec">
                                                        <h4>RAM</h4>
                                                        <p>{item.ram}</p>
                                                    </div>
                                                    <div className="spec">
                                                        <h4>BATTERY</h4>
                                                        <p>{item.battery}</p>
                                                    </div>
                                                </div>
                                                <div className="req">
                                                    <p>${item.price}</p>
                                                    <button><FontAwesomeIcon className='icon' icon={faWhatsapp} /><a href="">Request</a></button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        </div> */}
                        <h3 className='header'>Samsung</h3>
                        <div className="wrapper">
                            {product.samsung && product.samsung.map(item => {
                                return (
                                    <>
                                        <div className="card">
                                            <div className="img">
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className="textBox">
                                                <h3>{item.phone}</h3>
                                                <div className="specs">
                                                    <div className="spec">
                                                        <h4>STORAGE</h4>
                                                        <p>{item.storage}</p>
                                                    </div>
                                                    <div className="spec">
                                                        <h4>RAM</h4>
                                                        <p>{item.ram}</p>
                                                    </div>
                                                    <div className="spec">
                                                        <h4>BATTERY</h4>
                                                        <p>{item.battery}</p>
                                                    </div>
                                                </div>
                                                <div className="req">
                                                    <p>${item.price}</p>
                                                    <button><FontAwesomeIcon className='icon' icon={faWhatsapp} /><a href="">Request</a></button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                        {/* <h3 className='header'>Huawei</h3>
                        <div className="wrapper">
                            {product.huawei && product.huawei.map(item => {
                                return (
                                    <>
                                        <div className="card">
                                            <div className="img">
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className="textBox">
                                                <h3>{item.phone}</h3>
                                                <div className="specs">
                                                    <div className="spec">
                                                        <h4>STORAGE</h4>
                                                        <p>{item.storage}</p>
                                                    </div>
                                                    <div className="spec">
                                                        <h4>RAM</h4>
                                                        <p>{item.ram}</p>
                                                    </div>
                                                    <div className="spec">
                                                        <h4>BATTERY</h4>
                                                        <p>{item.battery}</p>
                                                    </div>
                                                </div>
                                                <div className="req">
                                                    <p>${item.price}</p>
                                                    <button><FontAwesomeIcon className='icon' icon={faWhatsapp} /><a href="">Request</a></button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        </div> */}
                        <h3 className='header'>Itel & Tecno</h3>
                        <div className="wrapper">
                            {product.itel && product.itel.map(item => {
                                return (
                                    <>
                                        <div className="card">
                                            <div className="img">
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className="textBox">
                                                <h3>{item.phone}</h3>
                                                <div className="specs">
                                                    <div className="spec">
                                                        <h4>STORAGE</h4>
                                                        <p>{item.storage}</p>
                                                    </div>
                                                    <div className="spec">
                                                        <h4>RAM</h4>
                                                        <p>{item.ram}</p>
                                                    </div>
                                                    <div className="spec">
                                                        <h4>BATTERY</h4>
                                                        <p>{item.battery}</p>
                                                    </div>
                                                </div>
                                                <div className="req">
                                                    <p>${item.price}</p>
                                                    <button><FontAwesomeIcon className='icon' icon={faWhatsapp} /><a href="">Request</a></button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                        <h3 className='header'>Redmi</h3>
                        <div className="wrapper">
                            {product.redmi && product.redmi.map(item => {
                                return (
                                    <>
                                        <div className="card">
                                            <div className="img">
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className="textBox">
                                                <h3>{item.phone}</h3>
                                                <div className="specs">
                                                    <div className="spec">
                                                        <h4>STORAGE</h4>
                                                        <p>{item.storage}</p>
                                                    </div>
                                                    <div className="spec">
                                                        <h4>RAM</h4>
                                                        <p>{item.ram}</p>
                                                    </div>
                                                    <div className="spec">
                                                        <h4>BATTERY</h4>
                                                        <p>{item.battery}</p>
                                                    </div>
                                                </div>
                                                <div className="req">
                                                    <p>${item.price}</p>
                                                    <button><FontAwesomeIcon className='icon' icon={faWhatsapp} /><a href="">Request</a></button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                        <h3 className='header'>Nokia</h3>
                        <div className="wrapper">
                            {product.nokia && product.nokia.map(item => {
                                return (
                                    <>
                                        <div className="card">
                                            <div className="img">
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className="textBox">
                                                <h3>{item.phone}</h3>
                                                <div className="specs">
                                                    <div className="spec">
                                                        <h4>STORAGE</h4>
                                                        <p>{item.storage}</p>
                                                    </div>
                                                    <div className="spec">
                                                        <h4>RAM</h4>
                                                        <p>{item.ram}</p>
                                                    </div>
                                                    <div className="spec">
                                                        <h4>BATTERY</h4>
                                                        <p>{item.battery}</p>
                                                    </div>
                                                </div>
                                                <div className="req">
                                                    <p>${item.price}</p>
                                                    <button><FontAwesomeIcon className='icon' icon={faWhatsapp} /><a href="">Request</a></button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </>
                );
            })}
        </div>
    );
};

export default MainProducts;