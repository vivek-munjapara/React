import React from 'react'


export default function InputValue({ data,index,remove,edit}) {
    // console.log(data)
    return (
        
        <div>
            <p>{data}
                <span>
                    <button onClick={()=>edit(index)}>Edit</button>
                    <button onClick={()=>remove(index)}>Delete</button>
                </span>
                
            </p>
        </div>
    )
}
