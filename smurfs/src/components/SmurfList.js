import React from 'react';
import Smurf from './Smurf';


const SmurfList = props => {
    return (
        <div>
          {props.smurf.map(blueGuy => (
                <Smurf 
                    key={blueGuy.id} 
                    smurf={blueGuy}
                    addNewSmurf={props.addNewSmurf} />
            ))}  
        </div>
    );
};

export default SmurfList;