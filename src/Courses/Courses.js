import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Search from "../Search/Search";
import { Box } from "@mui/material"

const columns = [
  {
    id: 'sno',
    label: 'SI No',
    flex: 1,
    align: 'center',
    format: (value) => value.toFixed(2)
  },

  {
    id: 'name',
    label: 'Name',
    flex: 1,
    align: 'center',
    format: (value) => value.toFixed(2)
  },

  {
    id: 'email',
    label: 'Email',
    flex: 1,
    align: 'center',
    format: (value) => value.toFixed(2)
  },

  {
    id: 'mobileno',
    label: 'Mobile No',
    flex: 1,
    align: 'center',
    format: (value) => value.toFixed(2)
  },
  {
    id: 'dob',
    label: 'Dob',
    flex: 1,
    align: 'center',
    format: (value) => value.toFixed(2)
  },
  {
    id: 'gender',
    label: 'Gender',
    flex: 1,
    align: 'center',
    format: (value) => value.toFixed(2)
  },
  {
    id: 'address',
    label: 'Address',
    flex: 1,
    align: 'center',
    format: (value) => value.toFixed(2)
  },
  {
    id: 'enrollmentdate',
    label: 'Enrollment Date',
    flex: 1,
    align: 'center',
    format: (value) => value.toFixed(2)
  },
  {
    id: 'course',
    label: 'Course',
    flex: 1,
    align: 'center',
    format: (value) => value.toFixed(2)
  },
  {
    id: 'status',
    label: 'Status',
    flex: 1,
    align: 'center',
    format: (value) => value.toFixed(2)
  },
  {
    id: 'action',
    label: 'Action',
    flex: 1,
    align: 'center',
    format: (value) => value.toFixed(2)

  },
  
];

function createData(sno, name, email, mobileno, dob, gender, address, enrollmentdate, course, status, action) {
  // const density = population / size;
  return { sno, name, email, mobileno, dob, gender, address, enrollmentdate, course, status, action };
}

const rows = [
  createData('1', 'Hari', 'hari2854@gmail.com',' 4679754765', '12-03-2000', '  male', 'adityapur', '23-04-2017', 'java', 'Active', 'View'),
  createData('2', 'Dhruv', 'krdhruv8257@gmail.com', '329846578', '12-03-2000', 'male', 'adityapur', '12-03-2000', 'java', 'Active', 'View'),
  createData('3', 'Sharthak', 'sharthak3946@gmail.com', '903864531', '12-03-2000', 'male', 'adityapur', '12-03-2000', 'java', 'Active', 'View'),
  createData('4', 'Usha', 'kriusha8357@gmail.com', '3271674343', '12-03-2000', 'female', 'adityapur', '12-03-2000', 'java', 'Active', 'View'),
  createData('5', 'Chintu', 'chintukr9357@gamil.com', '7602103234', '12-03-2000', 'male', 'adityapur', '12-03-2000', 'java', 'Active', 'View'),
  createData('6', 'Arvi', 'arvi62@gamil.com', '2547540022', '12-03-2000', 'female', 'adityapur', '12-03-2000', 'java', 'Active', 'View'),
  createData('7', 'Deepti', 'deepti74@gmail.com', '8301569200', '12-03-2000', 'female', 'adityapur', 120312, 'java', 'Active', 'View'),
  createData('8', 'Dolly', 'dolly32@gamil.com', '4857000546', '12-03-2000', 'female', 'adityapur', '12-03-2000', 'java', 'Active', 'View'),
  createData('9', 'Marri', 'marri87@gail.com', '12657769157', '12-03-2000', 'male', 'adityapur', '12-03-2000', 'java', 'Active', 'View'),
  createData('10', 'Code with mosh', 'mosh45@gmail.com', '1263170009', '12-03-2000', 'male', 'adityapur', 230517, 'java', 'Active', 'View'),
  createData('12', 'Anuv', 'anuv23@gamil.com', '1263170009', '12-03-2000', 'male', 'adityapur', '12-03-2000', 'java', 'Active', 'View'),
  createData('13', 'Love Babber', 'babber4563@gamil.com', '1263170009', '12-03-2000', 'male', 'adityapur', '12-03-2000', 'java', 'Active', 'View'),
  createData('14', 'Code with Harry', 'harry7812@gamil.com', '1263170009', '12-03-2000', 'male', 'adityapur', '12-03-2000', 'java', 'Active', 'View'),
  createData('15', 'Bellie', 'belli3498@gamil.com', '1263170009', '12-03-2000', 'female', 'adityapur', '12-03-2000', 'java', 'Active', 'View'),
];

export default function StickyHeadTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (

    < Box className="container">
      <Search />

    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer
        sx={{ maxHeight: 440 }}>

        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, fontWeight: 900 }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </Box>
  );
}