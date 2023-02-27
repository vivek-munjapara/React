import { Button } from '@mui/material';
import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ProductData, ProductDataDelete } from '../Redux/action/productAction';



export default function ProductCard() {
    const data = useSelector(y => y.product);
    const dispatch = useDispatch()

    const dlt = (index) => {
        dispatch(ProductDataDelete(index))
        // console.log(index)
    }

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then(y => {
            // console.log(y);
            dispatch(ProductData(y.data))
        })
    }, [])
    // console.log(data);
    return (
        <div>
            {data.map((element, index) => {
                return (
                    <p key={index}>{element.title} <Button onClick={() => dlt(index)}>Delete</Button></p>
                )

            })}
        </div >
    )
}
