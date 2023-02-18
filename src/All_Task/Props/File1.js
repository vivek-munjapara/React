import React, { useEffect, useState } from 'react'
import axios from 'axios'
import FIle2 from './FIle2'

export default function File1() {

    const [Data, setData] = useState([])

    useEffect(() => {
        
        axios.get('https://jsonplaceholder.typicode.com/posts').then(y => {
            setData(y.data)
            console.log(y.data)
        })

    }, [])
    return (
        <div>
            <FIle2 item={Data} />
        </div>
    )
}
