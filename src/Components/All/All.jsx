import DenseTable from '../Table/Table';
import { useEffect } from 'react';
import { useState } from 'react';


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
                console.log(data)
                // this.setState({ totalReactPackages: data.total })
                return data;
            }).then(data => setData(data))
        },[])
    if (data != null){
    return (
        console.log(data),
        <div className='All'>
            <DenseTable data={data}></DenseTable>
        </div>
    );
    }
}

export default All;