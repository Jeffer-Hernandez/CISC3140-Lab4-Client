import { useRef, useEffect } from 'react';

export default function CreateForm() {
    const id = useRef(null); 
    const area_name = useRef(null); 
    const area_id = useRef(null); 
    const color = useRef(null); 
    const location = useRef(null); 
    const above_ground_feet = useRef(null); 
    const specific_location = useRef(null); 
    const activities= useRef(null); 
    const human_interaction= useRef(null); 
    const jsonData= {"area_id": area_id, "area_name": "area_name", "color": color, "location": location, "above_ground_feet": above_ground_feet, "specific_location": specific_location, "activities": activities, "human_interaction": human_interaction}

  function Send(id, area_id, area_name, color, location, above_ground_feet, specific_location, activities, human_interaction){
    console.log([id.current, area_id, area_name, color, location, above_ground_feet, specific_location, activities, human_interaction])
    useEffect(() => {
       
        // GET request using fetch with error handling
        fetch(`http://localhost:8081/insert?id=${id.current}&jsonData={"area_id":"${area_id.current}","area_name":"${area_name.current}","color":"${color.current}","location":"${location.current}","above_ground_feet":"${above_ground_feet.current}","specific_location":"${specific_location.current}","activities":"${activities.current}","human_interaction":"${human_interaction.current}"}`, {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
      
          })
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
      <form onSubmit={Send(id, area_id, area_name, color, location, above_ground_feet, specific_location, activities, human_interaction)}>
        <label>id:
          <input 
            type="text" 
            value={id.current}
            onChange={(e) => id.current = e.target.value}
          />
        </label>
        <label>area name:
          <input 
            type="text" 
            value={area_name.current}
            onChange={(e) => area_name.current = e.target.value}
          />
        </label>
        <label>area id:
          <input 
            type="text" 
            value={area_id.current}
            onChange={(e) => area_id.current = e.target.value}
          />
        </label>
        <label>color:
          <input 
            type="text" 
            value={color.current}
            onChange={(e) => color.current = e.target.value}
          />
        </label>
        <label>location:
          <input 
            type="text" 
            value={location.current}
            onChange={(e) => location.current = e.target.value}
          />
        </label>
        <label>feet above ground:
          <input 
            type="text" 
            value={above_ground_feet.current}
            onChange={(e) => above_ground_feet.current = e.target.value}
          />
        </label>
        <label>specific location:
          <input 
            type="text" 
            value={specific_location.current}
            onChange={(e) => specific_location.current = e.target.value}
          />
        </label>
        <label>activities:
          <input 
            type="text" 
            value={activities.current}
            onChange={(e) => activities.current = e.target.value}
          />
        </label>
        <label>human interaction:
          <input 
            type="text" 
            value={human_interaction.current}
            onChange={(e) => human_interaction.current = e.target.value}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  )
}
 