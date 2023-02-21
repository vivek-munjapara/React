import React, { useEffect, useState } from 'react'
import axios from 'axios'
import UserDetail from './UserDetail'
import THead from './THead'

export default function User() {

    const [apiData, setApiData] = useState([])

    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/posts').then(y => {
            setApiData(y.data)
            // console.log(y.data)
        })

    }, [])

    return (
        <table>
            <THead></THead>
            {
                apiData.map((element) => {
                    // console.log(element)
                    return (< UserDetail userData={element}></UserDetail>)
                })
            }
        </table>
    )
}
