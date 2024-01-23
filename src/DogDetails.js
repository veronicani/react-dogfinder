import{ useParams, Navigate } from "react-router-dom";

/**Displays details about one dog
 *
 * Props:
 * -dogs: data of all dogs [{id, name, src, facts}, ...]
 *
 * State: None
 *
 * URL Params:
 * -name: obj like {name: "Whiskey"}
 *
 * App -> DogDetails
 */
function DogDetails({ dogs }){
  const { name } = useParams();
  const dog = dogs.find(d => d.name.toLowerCase() === name);

  if(dog === undefined){
    return <Navigate to="/dogs" />
  }
  //add age to a new line
  return(
    <div>
      <h1>{dog.name}, {dog.age}</h1>
      <img src={`../${dog.src}.jpg`} alt={dog.name}/>
      <ul>
        {dog.facts.map((fact, idx) => <li key={idx}>{fact}</li>)}
      </ul>
    </div>
  )
}
export default DogDetails;