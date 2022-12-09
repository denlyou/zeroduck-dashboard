import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

function createData(
  name: string,
  email: string,
  date: string,
  salary: string,
  age: number,
  status: number,
) {
  return { name, email, date, salary, age, status };
}

const rows = [
  createData('Sally Quinn', 'eebsworth2m@sbwire.com', '09/27/2018', '$19586.23', 27, 1),
  createData('Margaret Bowers', 'kocrevy0@thetimes.co.uk', '09/23/2016', '$23896.35', 61, 2),
  createData('Minnie Roy', 'ediehn6@163.com', '10/15/2017', '$18991.67', 59, 3),
];

export default function TableCard(props: any) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>NAME</TableCell>
            <TableCell>EMAIL</TableCell>
            <TableCell>DATE</TableCell>
            <TableCell>SALARY</TableCell>
            <TableCell>AGE</TableCell>
            <TableCell>STATUS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.salary}</TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
