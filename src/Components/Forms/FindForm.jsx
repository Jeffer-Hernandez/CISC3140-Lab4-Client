import { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function FindForm() {

  const handleSubmit = (event) => {
    event.preventDefault();
    
  }
  const [id, setid] = useState(null); 
  const [data, setData] = useState(null); 
  useEffect(() => {
    // GET request using fetch with error handling
    fetch(`http://localhost:8081/get_by_id?id=`+id)
        .then(async response => {
            const data = await response.json();
            // check for error response
            if (!response.ok) {
                // get error message from body or default to response statusText
                const error = (data && data.message) || response.statusText;
                return Promise.reject(error);
            }
            console.log(data)
            // this.setState({ totalReactPackages: data.total })
            return data;
        }).then(data => setData(data))
},[id])
 if (id == null){
  return (
      <div>
      <form onSubmit={handleSubmit}>
        <label>Enter your id:
          <input 
            type="text" 
            value={id}
            onChange={(e) => setid(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  )
 }
 return (
  <div>
  <form onSubmit={handleSubmit}>
    <label>Enter your id:
      <input 
        type="text" 
        value={id}
        onChange={(e) => setid(e.target.value)}
      />
    </label>
    <input type="submit" />
  </form>
  <div>
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
      
      <TableRow
      //   key={data.area_name}
      //   sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      // >
      >
        <TableCell component="th" scope="row">
          {/* {console.log(data)} */}
        </TableCell>
        <TableCell align="right">{data.area_id}</TableCell>
        <TableCell align="right">{data.color}</TableCell>
        <TableCell align="right">{data.location}</TableCell>
        <TableCell align="right">{data.above_ground_feet}</TableCell>
        <TableCell align="right">{data.specific_location}</TableCell>
        <TableCell align="right">{data.activities}</TableCell>
        <TableCell align="right">{data.human_interaction}</TableCell>
      </TableRow>

    </TableBody>
  </Table>
</TableContainer>
</div>
</div>
 )
}