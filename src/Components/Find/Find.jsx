import { useEffect } from 'react';
import { useState } from 'react';
import CreateForm from '../Forms/FindForm';
import { withRouter } from "react-router-dom";
import DenseTable from '../Table/Table';
import FindForm from '../Forms/FindForm';



export default function Find() {

    // const [id, setId] = useState('');
    // //   const isFound = props.isFound;
    //   const handleSubmit = event => {
    //     console.log('handleSubmit ran');
    //     event.preventDefault(); // prevent page refresh
        
    //     // 👇️ access input values here
    //     console.log('id 👉️', id);
    
    //     // 👇️ clear all input values in the form
    //     setId(''); 
    //   };
    
    //   const [data, setData] = useState(null); 
    //     useEffect(() => {
    //         // GET request using fetch with error handling
    //         fetch(`http://localhost:8081/get_by_id?id=`+id)
    //             .then(async response => {
    //                 const data = await response.json();
    //                 // check for error response
    //                 if (!response.ok) {
    //                     // get error message from body or default to response statusText
    //                     const error = (data && data.message) || response.statusText;
    //                     return Promise.reject(error);
    //                 }
    //                 console.log(data)
    //                 // this.setState({ totalReactPackages: data.total })
    //                 return data;
    //             }).then(data => setData(data)).then(
    //                 this.props.history.push("/Find")
    //             )
    //     },[id])
    
        return(
            <FindForm/>
        )

}


