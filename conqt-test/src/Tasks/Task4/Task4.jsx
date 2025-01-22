import React, { useEffect, useState } from "react";
import "./Task4.css";

const Task4 = () => {
  const [cityName, setCityName] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [currTemp, setCurrTemp] = useState("");
  const [location, setLocation] = useState("");
  const [loading, setLoading] = useState(false);

  //557cd127d28ed28a1794519214a860e6

  const fetchWeather = async (cityName) => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=9482e04bf4d04ef0af7102355252201&q=${cityName}`
      );
      const data = await response.json();
      if (data) {
        setLoading(false);
        setWeatherData(data);
        setCurrTemp(data?.current?.feelslike_c);
        setLocation(data?.location?.name);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (cityName) {
      fetchWeather(cityName);
    }
  }, []);

  const handleSubmit = () => {
    if (cityName) {
      fetchWeather(cityName);
    }
  };
  return (
    <>
      <h3>Integrate and Visualize Data from a REST AP</h3>
      <div className="main-div">
        <h3>Weather App</h3>
        <input
          type="text"
          placeholder="City name"
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
        <div>{loading && <p>Loading...</p>}</div>
        {currTemp && (
          <div className="main-card">
            <span>
              City : <b>{location}</b>
            </span>
            <p>
              Temperature : <b>{currTemp}</b> celsius
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default Task4;
