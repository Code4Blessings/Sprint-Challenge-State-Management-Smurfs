import React,{ useState, useContext } from 'react';
import  SmurfContext  from './context/SmurfContext';


const SmurfForm = () => {
    const { smurf, addNewSmurf } = useContext(SmurfContext);
    const [smurfs, setSmurfs] = useState({
        name: '',
        height: '',
        age: ''
    });

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

                <button>Add New Smurf</button>
            </form>
        )
    }    

export default SmurfForm;