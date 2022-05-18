
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Avatar,
    Grid,
    Typography,
    TablePagination,
    TableFooter
 } from '@material-ui/core';
 import { indigo } from '@mui/material/colors';
 

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
          <TableCell className={classes.tableHeaderCell}>Отправитель</TableCell>
            <TableCell className={classes.tableHeaderCell}>Тема</TableCell>
            <TableCell className={classes.tableHeaderCell}>Вложения</TableCell>
            <TableCell className={classes.tableHeaderCell}>Дата</TableCell>
            <TableCell className={classes.tableHeaderCell}>Мессенджер/Почта</TableCell>
            <TableCell className={classes.tableHeaderCell}>Ссылка на письмо</TableCell>
            <TableCell className={classes.tableHeaderCell}>Статус</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
                    {
                        //проверка наличия данных с сервера
                        //map проходит по массиву с людьми, для каждого строка
                        emails.map((key, email) =>
                        (
                            <TableRow key={key}>
                              <TableCell>
                                  <Grid container>
                                      <Grid item lg={2}>
                                          <Avatar alt={email.from} src='.' className={classes.avatar}/>
                                      </Grid>
                                      <Grid item lg={10}>
                                          <Typography className={key}>{email.id}</Typography>
                                          <Typography color="textSecondary" variant="body2">{email.from}</Typography>
                                      </Grid>
                                  </Grid>
                                </TableCell>
                                <TableCell>
                                  <Typography color="primary" variant="subtitle2">{email.subject}</Typography>
                                </TableCell>
                                <TableCell>
                                  <Typography color="textSecondary" variant="body2">{email.file}</Typography>
                                </TableCell>
                                <TableCell>{email.date}</TableCell>
                                <TableCell>
                                  <Typography color="primary" variant="subtitle2">{email.messageType}</Typography>
                                </TableCell>
                                <TableCell>
                                  <Typography color="primary" variant="subtitle2">{email.userId}</Typography>
                                </TableCell>
                                
                                <TableCell>
                  <Typography 
                    className={classes.status}
                    style={{
                        backgroundColor: 
                        ((email.status === 'Active' && 'green') ||
                        (email.status === 'Pending' && 'blue') ||
                        (email.status === 'Blocked' && 'orange'))
                    }}
                  >{email.status}</Typography>
                </TableCell>
                               
                              
             </TableRow>
          ))}
        </TableBody>
        <TableFooter>
        {/* <TablePagination
            rowsPerPageOptions={[5, 10, 15]}
            component="div"
            count={USERS.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
        /> */}
        </TableFooter>
      </Table>
    </TableContainer>
  );
}










export default UserData