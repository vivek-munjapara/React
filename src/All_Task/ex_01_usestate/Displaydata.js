import React from 'react'
import localData from './Localobj'
import './Displaydata.css';

export default function Displaydata() {
    return (
        <div className='container'>
            <div className='hding'><h2>Product list</h2></div>
           
            {
                localData.map((value) => {
                
                return <div className='item'>
                    
                    <div>
                        <img src={value.thumbnail} />
                    </div>
                    

                    <div className='product-detail'>
                        <div className='btm'><strong>Product:</strong> {value.title}</div>
                        <div className='btm'><strong>Price:</strong> {value.price}</div>
                        <div className='btm'><strong>Brand:</strong> {value.brand}</div>
                        <div className='btm'><strong>Category:</strong> {value.category}</div>
                        <div className='btm'><strong>Description:</strong> {value.description}</div>
                    </div>
                </div>

                })
            }
        </div>
    )
}
