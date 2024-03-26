import React from 'react';
import data from '../../../data/db';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Products = () => {
  const [toggleState, setToggleState] = useState(1);
  const toggleTab = (index) =>{
    setToggleState(index)
}

  return (
    <div id='products'>
      <h2>Mobile Phones</h2>
      <ul className="nav-rec">
        <li><a onClick={() => toggleTab(1)} className={toggleState === 1 ? "active": "tab-link"}>Apple</a></li>
        <li><a onClick={() => toggleTab(2)} className={toggleState === 2 ? "active": "tab-link"}>Samsung</a></li>
        <li><a onClick={() => toggleTab(3)} className={toggleState === 3 ? "active": "tab-link"}>Huawei</a></li>
        <li><a onClick={() => toggleTab(4)} className={toggleState === 4 ? "active": "tab-link"}>Itel & Tecno</a></li>
        <li><a onClick={() => toggleTab(5)} className={toggleState === 5 ? "active": "tab-link"}>Redmi</a></li>
        <li><a onClick={() => toggleTab(6)} className={toggleState === 6 ? "active": "tab-link"}>Nokia</a></li>
      </ul>
      {data.Products && data.Products.map(product => {
        return (
          <>
            <div className={toggleState === 1 ? "wrapper Active": "wrapper"}>
              {product.apple && product.apple.map(item => {
                return (
                  <>
                    <div className="card">
                      <div className="img">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="textBox">
                        <h3>Apple</h3>
                        <div className="specs">
                          <div className="spec">
                            <h4>STORAGE</h4>
                            <p>128GB</p>
                          </div>
                          <div className="spec">
                            <h4>RAM</h4>
                            <p>4GB</p>
                          </div>
                          <div className="spec">
                            <h4>BATTERY</h4>
                            <p>5000mAh</p>
                          </div>
                        </div>
                        <div className="req">
                          <p>$150</p>
                          <button><FontAwesomeIcon className='icon' icon={faWhatsapp} /><a href="">Request</a></button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className={toggleState === 2 ? "wrapper Active": "wrapper"}>
              {product.apple && product.apple.map(item => {
                return (
                  <>
                    <div className="card">
                      <div className="img">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="textBox">
                        <h3>Samsung</h3>
                        <div className="specs">
                          <div className="spec">
                            <h4>STORAGE</h4>
                            <p>128GB</p>
                          </div>
                          <div className="spec">
                            <h4>STORAGE</h4>
                            <p>128GB</p>
                          </div>
                          <div className="spec">
                            <h4>STORAGE</h4>
                            <p>128GB</p>
                          </div>
                        </div>
                        <div className="req">
                          <p>$150</p>
                          <button><a href=""><FontAwesomeIcon icon={faWhatsapp} />Req</a></button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className={toggleState === 3 ? "wrapper Active": "wrapper"}>
              {product.apple && product.apple.map(item => {
                return (
                  <>
                    <div className="card">
                      <div className="img">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="textBox">
                        <h3>Huawei</h3>
                        <div className="specs">
                          <div className="spec">
                            <h4>STORAGE</h4>
                            <p>128GB</p>
                          </div>
                          <div className="spec">
                            <h4>STORAGE</h4>
                            <p>128GB</p>
                          </div>
                          <div className="spec">
                            <h4>STORAGE</h4>
                            <p>128GB</p>
                          </div>
                        </div>
                        <div className="req">
                          <p>$150</p>
                          <button><a href=""><FontAwesomeIcon icon={faWhatsapp} />Req</a></button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className={toggleState === 4 ? "wrapper Active": "wrapper"}>
              {product.apple && product.apple.map(item => {
                return (
                  <>
                    <div className="card">
                      <div className="img">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="textBox">
                        <h3>Itel & Tecno</h3>
                        <div className="specs">
                          <div className="spec">
                            <h4>STORAGE</h4>
                            <p>128GB</p>
                          </div>
                          <div className="spec">
                            <h4>STORAGE</h4>
                            <p>128GB</p>
                          </div>
                          <div className="spec">
                            <h4>STORAGE</h4>
                            <p>128GB</p>
                          </div>
                        </div>
                        <div className="req">
                          <p>$150</p>
                          <button><a href=""><FontAwesomeIcon icon={faWhatsapp} />Req</a></button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className={toggleState === 5 ? "wrapper Active": "wrapper"}>
              {product.apple && product.apple.map(item => {
                return (
                  <>
                    <div className="card">
                      <div className="img">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="textBox">
                        <h3>Redmi</h3>
                        <div className="specs">
                          <div className="spec">
                            <h4>STORAGE</h4>
                            <p>128GB</p>
                          </div>
                          <div className="spec">
                            <h4>STORAGE</h4>
                            <p>128GB</p>
                          </div>
                          <div className="spec">
                            <h4>STORAGE</h4>
                            <p>128GB</p>
                          </div>
                        </div>
                        <div className="req">
                          <p>$150</p>
                          <button><a href=""><FontAwesomeIcon icon={faWhatsapp} />Req</a></button>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <div className={toggleState === 6 ? "wrapper Active": "wrapper"}>
              {product.apple && product.apple.map(item => {
                return (
                  <>
                    <div className="card">
                      <div className="img">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="textBox">
                        <h3>Nokia</h3>
                        <div className="specs">
                          <div className="spec">
                            <h4>STORAGE</h4>
                            <p>128GB</p>
                          </div>
                          <div className="spec">
                            <h4>STORAGE</h4>
                            <p>128GB</p>
                          </div>
                          <div className="spec">
                            <h4>STORAGE</h4>
                            <p>128GB</p>
                          </div>
                        </div>
                        <div className="req">
                          <p>$150</p>
                          <button><a href=""><FontAwesomeIcon icon={faWhatsapp} />Req</a></button>
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

export default Products;