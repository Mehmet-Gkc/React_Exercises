# spa-weather-app

## Übung: Erstelle eine einfache Wetter-App

Erstelle eine einfache Wetter-App, mit der Benutzer einen Städtenamen eingeben können, um die aktuelle Temperatur, Luftfeuchtigkeit und Wetterbedingungen anzuzeigen. Die App soll sich auch an die zuletzt gesuchte Stadt erinnern und beim Laden der App die Wetterinformationen dieser Stadt anzeigen.

### Teil 1:

1. Richte eine neue React-App ein, z.B. mit `create-react-app` oder einer anderen bevorzugten Methode.

2. Erstelle zwei neue Komponenten: SearchBar.js und WeatherInfo.js.

3. In SearchBar.js erstelle ein gesteuertes Eingabeformular, um den Städtenamen zu verwalten.

  ```javascript
  import React, { useState } from 'react';

  function SearchBar({ onSearchCity }) {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
      /* Hier Fehlt dein Code */
    };

    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city}
          onChange={/* hier fehlt dein Code */}
          placeholder="Stadt eingeben"
        />
        <button type="submit">Suche</button>
      </form>
    );
  }

  export default SearchBar;
  ```

4. In App.js importiere und rendere die SearchBar-Komponente.

```javascript
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import WeatherInfo from './WeatherInfo';

function App() {
  const [cityName, setCityName] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  // ... Hier kommt der useEffect-Code ...
  
  return (
    <div className="App">
      <h1>Wetter-App</h1>
      {/* setze hier die props richtig*/}
      <SearchBar onSearchCity={null} /> 
      {weatherData && <WeatherInfo weatherData={null} />}
    </div>
  );
}

export default App;
 ```

 5. In WeatherInfo.js erstelle eine funktionale Komponente, die die Wetterdaten als Prop erhält.
 ```javascript
 import React from 'react';

function WeatherInfo({ weatherData }) {
  return (
    <div>
      <h2>{/*Stadt Name */}</h2>
      <p>Temperatur: {/* Temperatur */}°C</p>
      <p>Luftfeuchtigkeit: {/* Humidity */}%</p>
      <p>Wetterbedingungen: {/* description, z.b. "few clouds" */}</p>
    </div>
  );
}

export default WeatherInfo;
```

6. In App.js importiere und rendere die WeatherInfo-Komponente und übergebe die abgerufenen Wetterdaten als Prop.


### Teil 2: Speichere die zuletzt gesuchte Stadt im Browser-LocalStorage.

In App.js, ändere den useEffect()-Hook wie folgt:

1. Füge einen zweiten useEffect() hinzu, der nur einmal ausgeführt wird, wenn die Komponente eingehängt wird (mit einem leeren Array als zweites Argument). In diesem useEffect() hole die zuletzt gesuchte Stadt aus dem LocalStorage (falls vorhanden) und aktualisiere die State-Variable für den Städtenamen.

```javascript
useEffect(() => {
    // Hol aus dem Local Storage die "lastSearchedCity" Variable. (localStorage.getItem Funktion)
    // Wenn es sie gibt, dann überschreib den cityName state mit der Variable aus dem Local Storage. 
}); // Soll hier noch als zweites Argument was hin? Leeres Array? Volles Array? Wann soll dieser useEffect() ausgeführt werden. 
```

2. In dem bestehenden useEffect() zum Abrufen der Wetterdaten, füge die State-Variable für den Städtenamen zum Abhängigkeiten-Array hinzu.

```javascript
useEffect(() => {
  if (cityName) {
    async function fetchData() {
      const API_KEY = 'YOUR_API_KEY';
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      setWeatherData(data);
      // Hier muss noch der localStorage gesetzt werden. Benutze dazu die localStorage.SetItem Funktion
    }
    fetchData();
  }
}, [cityName]);
```

### Bonus:
Füge eine Fehlermeldung hinzu, wenn die Stadt nicht gefunden wurde.

Erweitere die Wetter-App, um eine Fehlermeldung anzuzeigen, wenn die Stadt, nach der gesucht wurde, nicht gefunden wurde oder es einen Fehler bei der Abfrage der API gibt.
