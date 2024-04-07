import React from "react";
import {Link} from 'react-router-dom';
import "./practice.css";

const practice = () => {

  return (
    <>
      <prachdr className="sec_1"> 
        <ul className="practice_header_container"> 
          <li className="practice_header"> 
            Harford County Course Selection
          </li>
        </ul>
      </prachdr>
      <prac className='practice'>
        <ul className="practice-container">
          <li className='practice-course'>
            <Link to='/millbrook' className='practice-course'> 
              Mill Brook
            </Link>
            <Link to='/scarboro' className='practice-course'> 
              Scarboro
            </Link>
            <Link to='/rockfield' className='practice-course'> 
              Rockfield
            </Link>
            <Link to='/churchville' className='practice-course'> 
              Churchville
            </Link>
            <Link to='/cmilton' className='practice-course'> 
              C Milton
            </Link>
          </li>
        </ul>
      </prac>
    </>
    
  );
}

export default practice;
