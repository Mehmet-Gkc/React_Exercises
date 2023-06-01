import React from 'react'

function WeatherInfo({weatherData}) {
    console.log(weatherData)
  return (
    <div>
      <h2>{weatherData.name}</h2>
      <p>Temperatur: {weatherData.main.temp}</p>
      <p>Luftfeuchtigkeit: {weatherData.main.humidity}</p>
      <p>Wetterbedingungen: {weatherData.weather[0].description}</p>
    </div>
  )
}

export default WeatherInfo
