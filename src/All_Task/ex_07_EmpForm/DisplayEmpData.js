import { Button, Table, TableBody, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useCallback, useMemo } from 'react'

import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import EmpCRUD from './EmpCRUD';

function DisplayEmpData({ item, remove }) {
    console.log(item)




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
        <>
            {

                <TableContainer sx={{ mt: '3' }}>
                    <Table sx={{ minWidth: 700 }} aria-label="customized table">

                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">Title</StyledTableCell>
                                <StyledTableCell align="center">First Name</StyledTableCell>
                                <StyledTableCell align="center">Last Name</StyledTableCell>
                                <StyledTableCell align="center">Email</StyledTableCell>
                                <StyledTableCell align="center">Mobile number</StyledTableCell>
                                <StyledTableCell align="center">Date of birth</StyledTableCell>
                                <StyledTableCell align="center">Actions</StyledTableCell>
                            </TableRow>
                        </TableHead>

                        <EmpCRUD item={item} remove={remove} />

                    </Table>
                </TableContainer>
            }
        </>
    )
}
export default React.memo(DisplayEmpData);