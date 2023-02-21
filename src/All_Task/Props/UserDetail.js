
import React from 'react'
import TableBody from './TableBody'
import THead from './THead'

export default function UserDetail({ userData }) {
  // console.log(props)
  console.log(userData)

  return (
    <>
      
        <TableBody tbody={userData}></TableBody>
      
    </>
  )
}
