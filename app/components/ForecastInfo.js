import React, { PropTypes } from 'react';
import { getWeatherImage, localeDate } from '../utils/openWeatherHelper';

function ForecastInfo({ isLoading, city, onDetail, list}){
  return (
    isLoading ? <div> Loading </div> :
    <div>
      <h1 className='forecast-header'> {city} </h1>
      <h2 className='forecast-subheader'> Select a day </h2>
      <ul className='flex-container flex-row'>
        {list.map((day, i) => {
          return (
            <li key={day.dt} data-id={i} className='forecast-body' onClick={onDetail}>
              <img src={getWeatherImage(day.weather[0].description)} alt={day.weather[0].description} />
              <p>{localeDate(day.dt)}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

ForecastInfo.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onDetail: PropTypes.func.isRequired
};

export default ForecastInfo;
