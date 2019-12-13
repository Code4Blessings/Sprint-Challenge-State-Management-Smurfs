import React, { useState } from "react";
import Smurfs from "./Smurfs";
import SmurfForm from "./SmurfForm";
import SmurfContext from "./context/SmurfContext";
import "./App.css";


function App() {
  const [smurf, setSmurf] = useState([]);

  const addNewSmurf = smurf => {
    const newSmurf = {
      name: smurf.name,
      age: smurf.age,
      height: smurf.height,
    }
    setSmurf([...smurf, newSmurf])
  }

 
    return (
      <div className="App">
        <SmurfContext.Provider value={{smurf, addNewSmurf}}>
          <h1>SMURFS! 2.0 W/ Redux</h1>
          <div>Welcome to your state management version of Smurfs!</div>
          <div>Start inside of your `src/index.js` file!</div>
          <div>Have fun!</div>
            <SmurfForm />
            <Smurfs />
        </SmurfContext.Provider>
      </div>
    );
  }


export default App;
