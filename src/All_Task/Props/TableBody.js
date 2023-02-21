import React from 'react'

export default function TableBody({ tbody }) {
    return (

        <tbody>
            <tr>
                <td>{tbody.userId}</td>
                <td>{tbody.id}</td>
                <td>{tbody.title}</td>
                <td>{tbody.body}</td>
            </tr>
        </tbody>
    )
}
