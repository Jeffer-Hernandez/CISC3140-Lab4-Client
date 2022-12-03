import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



export default function DenseTable(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Area Name</TableCell>
            <TableCell align="right">Area Id</TableCell>
            <TableCell align="right">Color</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Feet Above Ground</TableCell>
            <TableCell align="right">Specific Location</TableCell>
            <TableCell align="right">Activities</TableCell>
            <TableCell align="right">Human Interaction</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row) => (
            <TableRow
              key={row.area_name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.area_id}</TableCell>
              <TableCell align="right">{row.color}</TableCell>
              <TableCell align="right">{row.location}</TableCell>
              <TableCell align="right">{row.above_ground_feet}</TableCell>
              <TableCell align="right">{row.specific_location}</TableCell>
              <TableCell align="right">{row.activities}</TableCell>
              <TableCell align="right">{row.human_interaction}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}