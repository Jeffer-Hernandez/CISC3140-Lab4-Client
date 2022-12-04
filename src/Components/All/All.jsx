import DenseTable from '../Table/Table';
import { useEffect } from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';


function All() {
    const [data, setData] = useState(null); 
    useEffect(() => {
        // GET request using fetch with error handling
        fetch(`http://localhost:8081/get_all`)
            .then(async response => {
                const data = await response.json();

                // check for error response
                if (!response.ok) {
                    // get error message from body or default to response statusText
                    const error = (data && data.message) || response.statusText;
                    return Promise.reject(error);
                }
                // this.setState({ totalReactPackages: data.total })
                return data;
            }).then(data => setData(data))
        },[])
    if (data != null){
    return (
        <div>
            <div className='Home'>
                <Button href="/all">See All</Button>
                <Button href="/create">Create</Button>
                <Button href="/update">Update</Button>
                <Button href="/delete">Delete</Button>
                <Button href="/find">Find</Button>
            </div>
            <div className='All'>
                <DenseTable data={data}></DenseTable>
            </div>
        </div>
    );
    }
}

export default All;