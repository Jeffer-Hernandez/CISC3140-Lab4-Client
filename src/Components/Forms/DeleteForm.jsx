import { useState, useEffect } from 'react';

export default function DeleteForm() {

  const [id, setid] = useState(null); 
  function Send(){ 
    useEffect(() => {
        // GET request using fetch with error handling
        fetch(`http://localhost:8081/delete_by_id?id=`+id)
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
            })
    })
    }
  return (
      <div>
      <form onSubmit={Send()}>
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
