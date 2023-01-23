import React, { useState } from 'react'
import InputValue from './InputValue';

export default function DisplayValue() {
    const [inpt, setinpt] = useState("")
    const [myData, setMyData] = useState([]);
    const [isedit, setIsEdit] = useState(-1);

    const getValue = (event) => {
        setinpt(event.target.value)
    }

    const save = () => {
        let rawData = [...myData]
        if (isedit != -1) {
            rawData[isedit] = inpt

            setMyData(rawData)


        } else {
            rawData.push(inpt);
            setMyData(rawData);
        }
        setIsEdit(-1)

        // console.log(isedit);
    }

    const deleteData = (index) => {
        let rmData = [...myData]
        rmData.splice(index, 1)
        setMyData(rmData)
    }

    const editData = (index) => {
        let edtData = [...myData]
        setinpt(edtData[index])
        setIsEdit(index)
    }


    return (
        <div>
            <input type="text" onChange={getValue} value={inpt} />
            <button onClick={save}>Save</button>

            {
                myData.map((element, index) => {
                    return (
                        < InputValue data={element} remove={deleteData} index={index} edit={editData} />
                    );
                })
            }
        </div>
    )
}
