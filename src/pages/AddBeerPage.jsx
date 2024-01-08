import React, { useState } from 'react';
import axios from 'axios';

function AddBeerPage() {
    const [formData, setFormData] = useState({
        name: '',
        tagline: '',
        description: '',
        first_brewed: '',
        brewers_tips: '',
        attenuation_level: 0,
        contributed_by: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', formData);
            console.log(response.data);
        } catch (error) {
            console.error('Error submitting new beer:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" onChange={handleChange} placeholder="Name" />
            <input name="tagline" type="text" onChange={handleChange} placeholder="Tagline" />
            <textarea name="description" onChange={handleChange} placeholder="Description"></textarea>
            <input name="first_brewed" type="text" onChange={handleChange} placeholder="First Brewed" />
            <input name="brewers_tips" type="text" onChange={handleChange} placeholder="Brewer's Tips" />
            <input name="attenuation_level" type="number" onChange={handleChange} placeholder="Attenuation Level" />
            <input name="contributed_by" type="text" onChange={handleChange} placeholder="Contributed By" />
            <button type="submit">Add Beer</button>
        </form>
    );
}

export default AddBeerPage;
