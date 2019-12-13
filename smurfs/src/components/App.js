import React, { useState } from "react";
import Smurfs from "./Smurfs";
import SmurfForm from "./SmurfForm";
import "./App.css";


function App() {
  const [smurfs, setSmurfs] = useState([
    {
      name: 'Smurfette',
      age: '100',
      height: '2ft'
    }
  ]);

  const addNewSmurf = smurf => {
    const newSmurf = {
      name: smurf.name,
      age: smurf.age,
      height: smurf.height
    }
    setSmurfs([...smurfs, newSmurf])
  }

 
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
          <Smurfs />
          <SmurfForm />
      </div>
    );
  }


export default App;
