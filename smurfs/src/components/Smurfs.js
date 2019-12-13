import React, { useContext} from 'react';
import SmurfContext from './context/SmurfContext';


const Smurfs = () => {
    const { smurf} = useContext(SmurfContext);
    return (
       <div className="smurf-container">
      {smurf.map(smurf => (
        <div>
          <h2>{smurf.name}</h2>
          <p>{smurf.age}</p>
          <p>{smurf.height}</p>
        </div>
      ))}
     </div>
    )
}


export default Smurfs;