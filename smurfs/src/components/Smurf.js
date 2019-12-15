import React, { useContext } from 'react';
import SmurfContext from './context/SmurfContext';



const Smurf = () => {
  const { smurf } = useContext(SmurfContext);

    return (
       <div className="smurf-container">
          <h2>{smurf.name}</h2>
          <p>{smurf.age}</p>
          <p>{smurf.height}</p>
        </div>
    )
}


export default Smurf;