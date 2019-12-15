import React, { useState } from "react";
import SmurfForm from "./SmurfForm";
import SmurfList from "./SmurfList";
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
          <h1>SMURFS! 2.0 W/ CONTEXT</h1>
          <div>Welcome to your state management version of Smurfs!</div>
          <div>Have fun!</div>
            <SmurfForm />
            <SmurfList />
        </SmurfContext.Provider>
      </div>
    );
  }


export default App;
