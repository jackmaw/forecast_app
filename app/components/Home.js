import React from 'react';
import GetWeatherContainer from '../containers/GetWeatherContainer';

function Home(){
  return (
      <div className="main-container flex-container flex-column flex-justify-center flex-align-center">
        <h1 className="main-header">Enter a City and State </h1>
        <div className="flex-container flex-column flex-justify-center flex-align-center">
          <GetWeatherContainer />
        </div>
      </div>
  )
}

export default Home;
