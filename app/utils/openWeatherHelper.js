var axios = require('axios');

//http://openweathermap.org/api

//CURRENT WEATHER
//http://api.openweathermap.org/data/2.5/weather?q=London&appid=f79d6bce5f0045e5185aaf68bb99b891

//Forecast 5 days
//http://api.openweathermap.org/data/2.5/forecast/daily?q=London&mode=json&units=metric&cnt=5&appid=f79d6bce5f0045e5185aaf68bb99b891

const API_KEY = 'f79d6bce5f0045e5185aaf68bb99b891';
const qs = `?q=CITYNAME&appid=${API_KEY}`;
const API_URL = 'http://api.openweathermap.org/data/2.5/';
const IMG_PATH = '/app/images/';



export async function getForecast(cityName, days){
  const url = `${API_URL}forecast/daily${qs}&mode=json&units=metric&cnt=${days}`;
  try {
    const forecastInfo = await axios.get(url.replace('CITYNAME', cityName));
    return forecastInfo.data;
  } catch(e){
    console.warn('Error in getCurrentWeather', err);
  }
}

export function localeDate(timestamp){
  const now = new Date();
  const date = new Date(timestamp * 1000);

  return date.toDateString().split(' ').slice(0,3).join(' ');
}

export function getWeatherImage(desc){
    if (desc.indexOf('cloud') > -1){
      return IMG_PATH + 'brokenclouds.svg';
    }
    else if (desc.indexOf('rain') > -1){
      return IMG_PATH + 'moderate_rain.svg';
    }
    else if (desc.indexOf('clear sky') > -1){
      return IMG_PATH + 'clear_sky.svg';
    } else {
      return '';
    }
}
