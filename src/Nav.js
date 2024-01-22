import React from "react";
import { Link } from "react-router-dom";

/** Displays links to dogs.
 * 
 * Props:
 * - dogNames: array of dog names ["Whiskey", "Duke", "Perry", ...]
 * 
 * State:
 * none
 * 
 * App -> Nav
 */
function Nav({ dogNames }) {
  return (
    <ul>
      {dogNames.map((name, idx) =>
        <li>
          <Link key={`${name}-${idx}`}
                to={`/dogs/${name}`}
          >
            {name}
          </Link>
        </li>)}
    </ul>
  );
}
// end

export default Nav;