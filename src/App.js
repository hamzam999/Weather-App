import React,{useState} from "react";
import Axios from "axios";
import "./App.css";
import Weather from "./components/Weather";
import City from "./components/City";

function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=30c0d1389d26da8012eae5cb1cc74ccc`,
    );
    updateWeather(response.data);
  };
  return (
    <div className="container">
      <span className="label">React Weather App</span>
      {city && weather ? (
        <Weather weather={weather} city={city} />
      ) : (
        <City updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </div>
  );
}

export default App;
