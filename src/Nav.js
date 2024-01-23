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
//TODO:add home link/button in nav
function Nav({ dogs }) {

  return (
    <ul>
      {dogs.map((dog) =>
        <li key={dog.id}>
          <Link
            to={`/dogs/${dog.name.toLowerCase()}`}
          >
            {dog.name}
          </Link>
        </li>)}
    </ul>
  );
}
// end

export default Nav;