import React, { useState } from 'react';
import FormSearch from './FormSearch';
import City from './City';
import Weather from "../img/weather.png";
const WeatherApp = () => {
    
    const [city, setCity] = useState("");
    const onCityValue = (onCityValueName) => {
        setCity(onCityValueName)
    }

    return (
        <div className='container card-search'>
            <div className='form-search'>
                <img src={Weather} alt="weather" />
                <h2>Meteorologia de tu ciudad</h2>
                <FormSearch nameCityClean={onCityValue} />
            </div>
            <City cityValue={city} />
        </div>
    )
}

export default WeatherApp