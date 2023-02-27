import React from 'react'
import EditpopupData from './EditpopupData'
import FormData from './FormData'
import TableData from './TableData'

export default function CRUD() {

  return (
    <>
      <div className='container mt-3'>

        <h2 className='d-flex justify-content-around m-3'>CRUD Operation</h2>

        <div className='row d-flex justify-content-center'>
          <FormData />
          <TableData />
         
        </div>
      </div>
      
    </>
  )
}
