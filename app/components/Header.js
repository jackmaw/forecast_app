import React, { PropTypes } from 'react';
import GetWeatherContainer from '../containers/GetWeatherContainer';

function Header({ title }){
  return (
    <header className="header">
      <nav className="main-nav flex-container flex-row flex-justify-space-between flex-align-center">
        <h2 className=" nav-title">{title}</h2>
          <GetWeatherContainer />
      </nav>
    </header>
  )
}

Header.PropTypes = {
  title: PropTypes.string
};
export default Header;
