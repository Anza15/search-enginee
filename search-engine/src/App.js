import logo from './logo.svg';
import Weather from './Weather';
import './App.css';


export default function App() {
  return (
    <div className="App">
       <div className="container">
      
       <h1>Weather App</h1>
       <Weather />
          <footer>
            This project was coded by {""}
            <a href="#" target="_blank"
            rel="noopener noreferrer">
            Anza Mukhithi
          </a>{""}
          and is {""}
          <a href="#" target="_blank"
          rel="noopener noreferrer">
            open-source on Github
            
            and {""}
            <a
            href="#"
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

