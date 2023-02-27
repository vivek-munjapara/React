import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { SaveData } from './Redux/Action/CRUDaction'

export default function FormData() {

 
    const dispatch = useDispatch()

    const [input, setInput] = useState({
        firstName: "",
        lastName: ''
    })

    const inputHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    const submitData = (e) => {
        e.preventDefault();
        dispatch(SaveData(input))
    }
    // console.log(userFUllName)

    return (
    
 
            <form class="col-4" onSubmit={submitData}>
                <div class="mb-3">
                    <label class="form-label">Enter First Name</label>
                    <input type="text" class="form-control" name='firstName' id="exampleInputEmail1" onChange={inputHandler} />
                </div>
                <div class="mb-3 " >
                    <label class="form-label">Enter Last Name</label>
                    <input type="text" class="form-control" name='lastName' id="exampleInputEmail1" onChange={inputHandler} />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
    
    )
}
