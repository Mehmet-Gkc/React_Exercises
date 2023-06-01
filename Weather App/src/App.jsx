import React, { useState, useEffect } from 'react';
import WeatherInfo from './Components/WeatherInfo';
import SearchBar from './Components/SearchBar';

function App() {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState("");

  useEffect(() => {
    async function fetchData() {
      const API_KEY = "05f80100e1d77f7e1b2e9e6070338f3d";
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
      const data = await response.json();
      setWeatherData(data)      
    }
    if(cityName) {
      fetchData()
    }    
  }, [cityName])

  return (
    <>
     <div className='App'>
      <h1>Weather App</h1>
      
      <SearchBar onSearchCity={setCityName}/>
      {weatherData && <WeatherInfo weatherData={weatherData}/>} 
     </div>
    </>
  )
}

export default App
