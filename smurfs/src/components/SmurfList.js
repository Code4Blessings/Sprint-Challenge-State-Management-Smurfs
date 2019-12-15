import React, { useContext} from 'react';
import SmurfContext from './context/SmurfContext';
import Smurf from './Smurf';


const SmurfList = () => {
    const { smurf, addNewSmurf } = useContext(SmurfContext);
    return (
        <div>
          {smurf.map(blueGuy => (
                <Smurf 
                    key={blueGuy.id} 
                    smurf={blueGuy}
                    addNewSmurf={addNewSmurf} />
            ))}  
        </div>
    );
};

export default SmurfList;