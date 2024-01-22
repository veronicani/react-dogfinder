
/**Displays list of dogs.
 *
 * Props: Dogs
 *
 * State: None
 *
 * App -> DogList
 */
function DogList({ dogs }){
  console.log("in Dog list component")
  return(
    <div>
      <h1>Dog List!</h1>
      {/* {dogs.map(dog => )} */}
    </div>
  )
}
export default DogList;