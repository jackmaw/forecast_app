import React, { PropTypes } from 'react';
import { localeDate, getWeatherImage } from '../utils/openWeatherHelper';


function DayWeather({cityName, forecast, isLoading}){
  return (
    isLoading ? <p>  Loading... </p> :
      <div className="flex-container flex-column flex-justify-center flex-align-center">
        <h1 className='forecast-header'> {cityName} </h1>
        <ul className='flex-container flex-column flex-align-center forecast-props'>
          <li>
            <img src={getWeatherImage(forecast.weather[0].description)} alt={forecast.weather[0].description} />
          </li>
          <li>{localeDate(forecast.dt)}</li>
          <li>{forecast.weather[0].description}</li>
          <li>min temp: {Math.floor(forecast.temp.min)} degrees</li>
          <li>max temp: {Math.floor(forecast.temp.max)} degrees</li>
          <li>humidity: {forecast.humidity}</li>
        </ul>
      </div>
  )
}

DayWeather.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  cityName: PropTypes.string.isRequired,
  forecast: PropTypes.shape({
    dt: PropTypes.number.isRequired,
    humidity: PropTypes.number.isRequired,
    weather: PropTypes.array.isRequired,
    temp: PropTypes.shape({
      min: PropTypes.number.isRequired,
      max: PropTypes.number.isRequired
    })

  })
}

export default DayWeather;
