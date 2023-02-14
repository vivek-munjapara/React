import React from 'react'
import { Button, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material'
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';


export default function EmpCRUD({ item, remove }) {


    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));


  return (
          <TableBody>
              {item.map((row, index) => (
                  <StyledTableRow>
                      <StyledTableCell align="center">{row.firstName}</StyledTableCell>
                      <StyledTableCell align="center">{row.lastName}</StyledTableCell>
                      <StyledTableCell align="center">{row.email}</StyledTableCell>
                      <StyledTableCell align="center">{row.email}</StyledTableCell>
                      <StyledTableCell align="center">{row.mobilenumber}</StyledTableCell>
                      <StyledTableCell align="center">{row.dob}</StyledTableCell>
                      
                      <StyledTableCell align="center">
                          <Button>Edit</Button>
                          <Button onClick={() => remove(index)}>Delete</Button>
                      </StyledTableCell>
                  </StyledTableRow>
              ))}
          </TableBody>
  )
}
