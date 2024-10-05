import logo from './logo.svg';
import Weather from './Weather';
import axios from 'axios';
import './App.css';
import WeatherForecast from './WeatherForecast';
import WeatherForecastt from './WeatherForecastt';


export default function App() {
  return (
    <div className="App">
       <div className="container">
      
       <h1>Weather App</h1>
       <Weather defaultCity="Pretoria"/>
      
          <footer>
            This project was coded by {""}
            <a href="#" target="_blank"
            rel="noopener noreferrer">
            Anza Mukhithi
          </a>{""}
          and is {""}
          <a href="https://github/Anza15/search-enginee" target="_blank"
          rel="noopener noreferrer">
            open-source on Github

            and {""}
            <a
            href="https://whimsical-croquembouche-ab7330.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>
  
        </a>
      </footer>
      </div>
      </div>
  );
}

