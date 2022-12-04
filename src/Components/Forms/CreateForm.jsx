import { useState, useEffect } from 'react';

export default function CreateForm() {
  const [id, setId] = useState(null); 
  const [area_name, setAreaName] = useState(null); 
  const [area_id, setAreaId] = useState(null); 
  const [color, setColor] = useState(null); 
  const [location, setLocation] = useState(null); 
  const [above_ground_feet, setAboveGroundFeet] = useState(null); 
  const [specific_location, setSpecificLocation] = useState(null); 
  const [activities, setActivities] = useState(null); 
  const [human_interaction, setHumanInteraction] = useState(null); 
  const jsonData= {"area_id": area_id, "area_name": "area_name", "color": color, "location": location, "above_ground_feet": above_ground_feet, "specific_location": specific_location, "activities": activities, "human_interaction": human_interaction}
    console.log(jsonData.area_id)
  function Send(){
    useEffect(() => {
       
        // GET request using fetch with error handling
        fetch(`http://localhost:8081/insert?id=${id}&jsonData={${encodeURIComponent(jsonData)}$}`)
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
        <label>id:
          <input 
            type="string" 
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </label>
        <label>area name:
          <input 
            type="text" 
            value={area_name}
            onChange={(e) => setAreaName(e.target.value)}
          />
        </label>
        <label>area id:
          <input 
            type="text" 
            value={area_id}
            onChange={(e) => setAreaId(e.target.value)}
          />
        </label>
        <label>color:
          <input 
            type="text" 
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>
        <label>location:
          <input 
            type="text" 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label>feet above ground:
          <input 
            type="text" 
            value={above_ground_feet}
            onChange={(e) => setAboveGroundFeet(e.target.value)}
          />
        </label>
        <label>specific location:
          <input 
            type="text" 
            value={specific_location}
            onChange={(e) => setSpecificLocation(e.target.value)}
          />
        </label>
        <label>activities:
          <input 
            type="text" 
            value={activities}
            onChange={(e) => setActivities(e.target.value)}
          />
        </label>
        <label>human interaction:
          <input 
            type="text" 
            value={human_interaction}
            onChange={(e) => setHumanInteraction(e.target.value)}
          />
        </label>
        <input type="submit" />
      </form>
    </div>
  )
}
 