
import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Avatar,
    Grid,
    Typography,
    TablePagination,
    TableFooter
 } from '@material-ui/core';
 import { indigo } from '@mui/material/colors';
 import { Link } from "react-router-dom";
import { set } from "react-hook-form";
import { styled } from '@mui/material/styles';
import  { tableCellClasses } from '@mui/material/TableCell';





const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: color,
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

 const color = indigo[300];
 const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
      
    },
    tableContainer: {
        borderRadius: 15,
        margin: '50px auto',
        maxWidth: 1350,
        
    },
    tableHeaderCell: {
        fontWeight: 'bold',
        backgroundColor: color,
        color: theme.palette.getContrastText(theme.palette.primary.dark)
    },
    avatar: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.getContrastText(theme.palette.primary.light)
    },
    name: {
        fontWeight: 'bold',
        color: theme.palette.secondary.dark
    },
    status: {
        fontWeight: 'bold',
        fontSize: '0.75rem',
        color: 'white',
        backgroundColor: 'grey',
        borderRadius: 8,
        padding: '3px 10px',
        display: 'inline-block'
    }
  }));
//статус писем
let USERS = [], STATUSES = ['New', 'Read'];
for(let i=0;i<14;i++) {
    USERS[i] = {
        
        status: STATUSES[Math.floor(Math.random() * STATUSES.length)]
    }
}


 function UserData(props) {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const { emails } = props
   //данные полученные с сервера
    
    
    

    const handleChangePage = (event, newPage) => {
    setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
     };

    if (!emails || emails.length === 0) return <p>Нет данных.</p>

    
    return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          
          <TableRow>
            <StyledTableCell> <Typography >Тема</Typography></StyledTableCell>
            <StyledTableCell> <Typography >От кого</Typography></StyledTableCell>
            <StyledTableCell> <Typography >Кому</Typography></StyledTableCell>
            <StyledTableCell> <Typography >Время получения</Typography></StyledTableCell>
            <StyledTableCell> <Typography >Откуда отправлено</Typography></StyledTableCell>
          {/*
            <TableCell>Категория</TableCell> 
          */}
            <StyledTableCell><Typography >Подробнее</Typography>  </StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {
            emails.map((email, index) => {
              return (
                <StyledTableRow key="index">
                  <TableCell> {email.subject}</TableCell>
                  <TableCell>{email.from}</TableCell>
                  <TableCell>{email.to}</TableCell>
                  <TableCell>{email.date}</TableCell>
                  <TableCell>
                  <Typography color="primary" variant="subtitle2">{email.messageType}</Typography>
                    </TableCell>
                  {/* <TableCell>{email.categories}</TableCell> */}
                  <TableCell>
                    
                    <Button   component={Link} to={"/podrobnee/" + email.id}
                         variant="text"
                         type="submit" >
                                   Подробнее
                     </Button> 
                     <Button   component={Link} to="/newpochta"
                         variant="contained"
                         color="primary"
                         type="submit" >
                          Отправить ответ
                     </Button>
                  </TableCell>
                </StyledTableRow>
              )
            }
            )
          }
        </TableBody>
        
        <TableFooter>
        <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={USERS.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        </TableFooter>


      </Table>
    </TableContainer>
  );
}










export default UserData