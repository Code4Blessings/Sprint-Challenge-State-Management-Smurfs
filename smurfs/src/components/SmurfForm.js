import React,{ useState } from 'react';


const SmurfForm = (props) => {
    const [smurf, setSmurf] = useState({
        name: '',
        height: '',
        age: ''
    });

    const handleChange = event => {
        setSmurf({
            ...smurf, [event.target.name]: event.target.value  
        })
    }

    const submitForm = (event) => {
        event.preventDefault()
        props.addNewSmurf(smurf)
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

                <button type="submit">Add New Smurf</button>
            </form>
        )
    }    

export default SmurfForm;