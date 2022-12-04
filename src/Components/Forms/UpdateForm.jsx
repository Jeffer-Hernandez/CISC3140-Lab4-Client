import { useState, useEffect } from 'react';

export default function UpdateForm() {

  const [id, setid] = useState(null); 
  const [attribute, setAttribute] = useState(null); 
  const [value, setValue] = useState(null); 
  function Send(){ 
    useEffect(() => {
        // GET request using fetch with error handling
        fetch(`http://localhost:8081/update_record?id=${id}&attribute=${attribute}&value=${value}`)
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
        <label>Enter an id:
          <input 
            type="text" 
            value={id}
            onChange={(e) => setid(e.target.value)}
          />
        </label>
        <label>Attribute:
          <input 
            type="text" 
            value={attribute}
            onChange={(e) => setAttribute(e.target.value)}
          />
        </label>
        <label>Value:
          <input 
            type="text" 
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  )
 }
