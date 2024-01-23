import { Link } from "react-router-dom";
/**Displays list of all dogs.
 *
 * Props:
 * -dogs: data of all dogs [{id, name, src, facts}, ...]
 *
 * State: None
 *
 * App -> DogList
 */
function DogList({ dogs }){

  return(
    <div>
      <h1>Dog List!</h1>
      {dogs.map(dog =>
      <div key={dog.id}>
        <img src={`../${dog.src}.jpg`} alt={dog.name}/>
        <h3><Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link></h3>
      </div>)}
    </div>
  )
}
export default DogList;