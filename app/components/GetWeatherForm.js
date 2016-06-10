import React, { PropTypes } from 'react';
require('../styles/main.css');

function GetWeatherForm({onInputChange, onGetWeather}){
  return (
    <form>
      <input onChange={onInputChange} type="text"  className="spacing" placeholder="Warsaw" />
      <button type="submit" className="spacing" onClick={onGetWeather}>
        Get Weather
      </button>
    </form>
  )
}

GetWeatherForm.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  onGetWeather: PropTypes.func.isRequired
}

export default GetWeatherForm;
