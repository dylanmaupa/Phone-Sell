import React from 'react'
import data from '../../../data/db'

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
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default LatestProduct