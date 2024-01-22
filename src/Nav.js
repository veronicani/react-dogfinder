import React from "react";
import { Link } from "react-router-dom";

/** Displays links to dogs.
 *
 * Props:
 * - dogs: array of dog objects [{name, age, src, facts, id}, ...]
 *
 * State:
 * none
 *
 * App -> Nav
 */
function Nav({ dogs }) {
  console.log("In Nav")
  return (
    <ul>
      {dogs.map((dog) =>
        <li>
          <Link key={dog.id}
                to={`/dogs/${dog.name}`}
          >
            {dog.name}
          </Link>
        </li>)}
    </ul>
  );
}
// end

export default Nav;