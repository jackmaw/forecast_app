import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
require('../styles/main.css');

import Header from './Header';
//TODO improve transition.
function Main({children, location}){
  return (
    <div className="app-container">
      <Header title="Clever Title" />
      <ReactCSSTransitionGroup transitionName='appear' transitionEnterTimeout={500} transitionLeaveTimeout={500}>
        {React.cloneElement(children, {key: location.pathname})}
      </ReactCSSTransitionGroup>
    </div>
  )
}

export default Main;
