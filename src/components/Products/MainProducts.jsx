import data from '../../../data/db';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const MainProducts = () => {
    const [toggleState, setToggleState] = useState(2);
    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <div id='main-products'>
            <h2>Our Products</h2>
            <ul className="nav-rec">
                {/* <li><a onClick={() => toggleTab(1)} className={toggleState === 1 ? "active" : "tab-link"}>Apple</a></li> */}
                <li><a onClick={() => toggleTab(2)} className={toggleState === 2 ? "active" : "tab-link"}>Samsung</a></li>
                <li><a onClick={() => toggleTab(4)} className={toggleState === 4 ? "active" : "tab-link"}>Itel & Tecno</a></li>
                <li><a onClick={() => toggleTab(5)} className={toggleState === 5 ? "active" : "tab-link"}>Redmi</a></li>
                <li><a onClick={() => toggleTab(6)} className={toggleState === 6 ? "active" : "tab-link"}>Nokia</a></li>
                <li><a onClick={() => toggleTab(3)} className={toggleState === 3 ? "active" : "tab-link"}>TV</a></li>
            </ul>
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
                        {/* <h3 className='header'>Samsung</h3> */}
                        <div className={toggleState === 2 ? "wrapper Active" : "wrapper"}>
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
                                                    <button><FontAwesomeIcon className='icon' icon={faWhatsapp} /><a target='_blank' href="https://wa.link/2kjdxu">Request</a></button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                        {/* <h3 className='header'>Huawei</h3> */}
                        <div className={toggleState === 3 ? "wrapper Active" : "wrapper"}>
                            {product.tv && product.tv.map(item => {
                                return (
                                    <>
                                        <div className="card">
                                            <div className="img">
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div className="textBox">
                                                <h3>{item.tv}</h3>
                                                <div className="specs">
                                                    <div className="spec">
                                                        <h4>SIZE</h4>
                                                        <p>{item.size}</p>
                                                    </div>
                                                    <div className="spec">
                                                        <h4>RESOLUTION</h4>
                                                        <p>{item.res}</p>
                                                    </div>
                                                    {/* <div className="spec">
                                                        <h4>BATTERY</h4>
                                                        <p>{item.battery}</p>
                                                    </div> */}
                                                </div>
                                                <div className="req">
                                                    <p>${item.price}</p>
                                                    <button><FontAwesomeIcon className='icon' icon={faWhatsapp} /><a target='_blank' href="https://wa.link/2kjdxu">Request</a></button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                        {/* <h3 className='header'>Itel & Tecno</h3> */}
                        <div className={toggleState === 4 ? "wrapper Active" : "wrapper"}>
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
                                                    <button><FontAwesomeIcon className='icon' icon={faWhatsapp} /><a target='_blank' href="https://wa.link/2kjdxu">Request</a></button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                        {/* <h3 className='header'>Redmi</h3> */}
                        <div className={toggleState === 5 ? "wrapper Active" : "wrapper"}>
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
                                                    <button><FontAwesomeIcon className='icon' icon={faWhatsapp} /><a target='_blank' href="https://wa.link/2kjdxu">Request</a></button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                        {/* <h3 className='header'>Nokia</h3> */}
                        <div className={toggleState === 6 ? "wrapper Active" : "wrapper"}>
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
                                                    <button><FontAwesomeIcon className='icon' icon={faWhatsapp} /><a target='_blank' href="https://wa.link/2kjdxu">Request</a></button>
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