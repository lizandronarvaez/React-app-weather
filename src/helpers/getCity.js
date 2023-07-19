import { useEffect } from "react";

const getCity = async (city) => {

    const apiKey = '237d6f5dd8ff023845666cb58f2b92bf';
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city},es&appid=${apiKey}&lang=es`;

    const response = await fetch(weatherUrl);
    const data = await response.json()

    const { id, main, name, weather } = data;

    const informationCity = {
        id,
        name,
        temperature: {
            now: (main.temp - 273.15).toFixed(1),
            min: (main.temp_min - 273.15).toFixed(1),
            max: (main.temp_max - 273.15).toFixed(1)
        },
        descriptionCity: {
            description: weather[0].description,
            icon: weather[0].icon
        }
    }

    return informationCity
}

export default getCity