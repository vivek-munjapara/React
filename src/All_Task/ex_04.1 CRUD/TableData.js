import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import EditpopupData from './EditpopupData';
import { dltData } from './Redux/Action/CRUDaction';


export default function TableData() {
  const userFUllName = useSelector(y => y.userName);
  const [indData, setIndex] = useState(0);
  const dispatch = useDispatch();


  const dltUser = (index) => {
    console.log(index)
    dispatch(dltData(index))
  }

  const editUser = (index) => {

    setIndex(index)
  }

  return (
    <div class="col-6">

      <table class="table table-dark table-hover ">
        <thead>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            userFUllName.map((ele, index) => {
              return (
                <tr>
                  <td>{ele.firstName} </td>
                  <td>{ele.lastName}</td>
                  <td>
                    <button type="button" class="btn btn-info mr-1" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => { editUser(index) }}>
                      Edit
                    </button>
                    {/* <button class="btn btn-info mr-1" onClick={() => { editUser(index) }}>Edit</button> */}
                    <button class="btn btn-danger" onClick={() => { dltUser(index) }}>Delete</button></td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
      <EditpopupData index={indData} />
    </div>
  )
}
