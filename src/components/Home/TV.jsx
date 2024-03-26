import React from 'react';
import data from '../../../data/db'

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
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default TV;