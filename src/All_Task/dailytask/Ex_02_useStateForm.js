import React, { useState } from 'react'

export default function Ex_02_useStateForm() {
    
    const [input, setInput] = useState({
        firstName: '',
        lastName: ''
    })

    const [data, setData] = useState([]);

    const saveData = (e) => {
        e.preventDefault();
        // console.log(input)
        let item = [...data]
        item.push(input)
        setData(item)
    }
    console.log(data)

    const inputHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <form onSubmit={saveData}>
                <input type='text' name='firstName' placeholder='First Name' onChange={inputHandler} />
                <input type='text' name='lastName' placeholder='Last Name' onChange={inputHandler} />
                <input type='submit' />
            </form>
            <div>
                <table>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                    {
                        data.map((ele) => {
                            return (
                                <tr>
                                    <td>{ele.firstName}</td>
                                    <td>{ele.lastName}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>

        </div>
    )
}
