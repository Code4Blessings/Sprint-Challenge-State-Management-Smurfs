import React,{ useState, useContext, useEffect } from 'react';
import  SmurfContext  from './context/SmurfContext';
import './Smurfs.css';

import axios from 'axios';

const SmurfForm = () => {
    const { smurf, addNewSmurf } = useContext(SmurfContext);
    const [smurfs, setSmurfs] = useState({
        name: '',
        height: '',
        age: ''
    });
    
    useEffect(() => {
        axios.get('http://localhost:3333/smurfs')
        .then(response => {
            console.log(response);
            setSmurfs(response.data)
        })
        .catch(error => {
            console.log('Data returned an error', error)
        }) 
    },[]);

    const handleChange = event => {
        setSmurfs({
            ...smurfs, [event.target.name]: event.target.value  
        })
    }

    const submitForm = (event) => {
        event.preventDefault()
        addNewSmurf(smurf)
    }

        return (
            <form onSubmit={submitForm} className="form-container">
                <label htmlFor="name">Name:
                <input 
                onChange={handleChange}
                name="name"
                type="text"/>
                value={smurfs.name}
                </label>

                <label htmlFor="name">Height:
                <input 
                onChange={handleChange} 
                name="height" 
                type="text"/>
                </label>

                <label htmlFor="name">Age:
                <input 
                onChange={handleChange}
                name="age" 
                type="text"/>
                </label>

                <button onClick={() => {addNewSmurf(smurf)}}>Add New Smurf</button>
            </form>
        )
    }    

export default SmurfForm;