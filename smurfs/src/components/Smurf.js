import React from 'react';



const Smurf = (props) => {
  const {name, age, height } = props
    return (
       <div className="smurf-container">
          <h2>{name}</h2>
          <p>{age}</p>
          <p>{height}</p>
        </div>
    )
}


export default Smurf;