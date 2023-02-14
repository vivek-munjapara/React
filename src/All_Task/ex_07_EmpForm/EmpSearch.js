import React, { useMemo, useState } from 'react'
import DisplayEmpData from './DisplayEmpData';
import EmpCRUD from './EmpCRUD';

 function EmpSearch({ searchItem }) {
    const [inpt, setInpt] = useState('');
    const [srceData, setsrceData] = useState([]);    

    const srcData = useMemo(() => { 
        console.log(inpt);
        let d = [...searchItem];
        let filterData = d.filter((value) => { 
            return value.firstName.indexOf(inpt) >= 0;
        });
        setsrceData(filterData);
    },[inpt])
  
    return (
    <div>
          <input type='text' onChange={(e) => setInpt(e.target.value)} />
          <button onClick={srcData}>Search</button>

          <DisplayEmpData item={srceData}/>

    </div>
  )
}
export default React.memo(EmpSearch);