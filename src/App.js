import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import RickAndMortyData from './RickAndMortyData';
import CharacterDetails from './CharacterDetails';
import './App.css'; // Import CSS file for styling

function App() {
    
    const [locations, setLocations] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { data } = await axios.get(`https://rickandmortyapi.com/api/location/?name=${query}`);
                setLocations(data.results);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [query]);

    const handleSearch = event => {
        setQuery(event.target.value);
    };

    return (
        <div className="App">
            <div className="search">
                <input
                    type="text"
                    placeholder="Search Location"
                    className="input"
                    onChange={handleSearch}
                    value={query}
                />
            </div>
            <div className="results">
                {locations.map(location => (
                    <div key={location.id} className="location-card">
                        <h2>{location.name}</h2>
                        <p>Type: {location.type}</p>
                        <h3>Residents:</h3>
                        <ul>
                            {location.residents.map(residentUrl => (
                                <li key={residentUrl}>
                                    <Resident residentUrl={residentUrl} />
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}

function Resident({ residentUrl }) {
    const [resident, setResident] = useState(null);

    useEffect(() => {
        const fetchResident = async () => {
            try {
                const { data } = await axios.get(residentUrl);
                setResident(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchResident();
    }, [residentUrl]);

    if (!resident) return null;

    return (
        <div className="resident">
            <img src={resident.image} alt={resident.name} />
            <p>Name: {resident.name}</p>
            <p>Status: {resident.status}</p>
        </div>
    );
    
    
}

export default App;
