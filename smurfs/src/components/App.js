import React, { useState, useEffect, } from "react";
import axios from 'axios';
import SmurfForm from "./SmurfForm";
import SmurfList from "./SmurfList";
import SmurfContext from "./context/SmurfContext";
import "./App.css";


function App() {
  const [smurf, setSmurf] = useState([]);

   useEffect(() => {
        axios.get('http://localhost:3333/smurfs')
        .then(response => {
            console.log('get respinse', response.data);
            setSmurf(response.data)
        })
        .catch(error => {
            console.log('Data returned an error', error)
        }) 
    },[]); 

  const addNewSmurf = smurf => {
    const newSmurf = {
      name: smurf.name,
      age: smurf.age,
      height: smurf.height,
      id: Date.now()
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
