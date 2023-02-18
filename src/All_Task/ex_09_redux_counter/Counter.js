import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Redux/action/counterAction'

export default function Counter() {

    const incre = useSelector(y => y.counter)
    const dispatch = useDispatch()

    const Increment = () => {
        dispatch(increment())
    }

    const Decrement = () => {
        dispatch(decrement())
    }

    return (
        <div>
            {incre}
            <Button onClick={Increment}>+</Button>
            <Button onClick={Decrement}>-</Button>
        </div>
    )
}
