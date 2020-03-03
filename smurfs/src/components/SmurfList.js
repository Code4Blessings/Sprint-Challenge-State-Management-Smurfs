import React, { useContext} from 'react';
import SmurfContext from './context/SmurfContext';
import Smurf from './Smurf';




const SmurfList = () => {
    const { smurf, addNewSmurf } = useContext(SmurfContext);
    console.log(smurf);
    return (
        <div>
            <h2>Hello From Smurf Village</h2>
          {smurf.map(blueGuy => 
                <Smurf 
                    key={blueGuy.id} 
                    smurf={blueGuy}
                addNewSmurf={addNewSmurf} />
            )} 
           
        </div>
    );
};

export default SmurfList;