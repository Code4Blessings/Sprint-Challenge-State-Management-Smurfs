import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SmurfForm from './SmurfForm';

const Smurfs = () => {
    const [smurfs, setSmurfs] = useState([])

    useEffect(() => {
        axios
        .get('http://localhost:3333/smurfs')
        .then(response => {
            console.log(response);
            setSmurfs(response.data);
        })
        .catch(error => {
            console.log('Data returned an error', error);
        })
    },[])
    return (
        <div className="smurfs-container">
           <SmurfForm 
           name={smurfs.name} 
           id={smurfs.id}
           age={smurfs.age} 
           height={smurfs.height}/>
        </div>
    )
}


export default Smurfs;