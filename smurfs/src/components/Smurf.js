import React, { useContext } from 'react';
import SmurfContext from './context/SmurfContext';

//DO NOT USE CONTEXT HERE ON THIS LEVEL!!!
//USE CONTEXT AT THE TOP LEVEL!!!

const Smurf = (props) => {
  //const { smurf } = useContext(SmurfContext);

    return (
       <div className="smurf-container">
          <h2>{props.smurf.name}</h2>
          <p>{props.smurf.age}</p>
          <p>{props.smurf.height}</p>
        </div>
    )
}


export default Smurf;