import React, { useContext} from 'react';
import SmurfContext from './context/SmurfContext';


const Smurfs = () => {
    const { smurf} = useContext(SmurfContext);
    return (
       <div className="smurf-container">
      {smurf.map(blueGuy => (
        <div>
          <h2>{blueGuy.name}</h2>
          <p>{blueGuy.age}</p>
          <p>{blueGuy.height}</p>
        </div>
      ))}
     </div>
    )
}


export default Smurfs;