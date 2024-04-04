import React from 'react'
import {Link} from "react-router-dom"

export const navbar = () => {
  return ( 
  <nav>
    <ul>
      <li>
        <Link to ="/home">Home</Link>
        </li>
      <li>
        <Link to ="/play">Play</Link>
      </li>
    </ul>
  </nav>
  )
}

export default navbar;