import React,  { useState } from "react";
import axios from "axios";
import "./Weather.css";
 
  export default function Weather(props){
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  setTemperature(response.data.main.temp);
  console.log

    
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  
  function search() {
    const apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

     if (weatherData.ready) {
    return  (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
            <div className="row">
            <div className="col-9">
            <input type="search"  placeholder="search a city..."
            className="form-control"
            autoFocus="on"
            onChange={handleCityChange}
            />
           </div>
               <div className="col-3">
        <input type="submit"  
           value="search" 
            className="btn btn-primary" w-100/>
            </div>
            </div>
             </form>
        <h1>{WeatherData.city}</h1>
        <ul>
            <li> Wednesday 07:00 </li>
            <li>{WeatherData.description}</li>
        </ul>
        <div className="row mt-3">
        <div className="col-6">
        <img src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="Mostly Cloudy" />
            <span className="temperature">{Math.round(WeatherData.temperature)}</span>
            <span className="unit">°C</span>
            </div>
        <div className="col-6">
            <ul>
                <li>Precipitation: 15%</li>
                <li>Humidity: 72%</li>
                <li>Wind:{WeatherData.wind} 13km/h</li>
            </ul>
        </div>
        </div>
        </div>
    );
    
  } else {
    search();
    return "Loading...";
  }
}

