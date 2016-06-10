import React, { Component } from 'react';
import GetWeatherForm from '../components/GetWeatherForm';

class GetWeatherContainer extends Component{
  constructor(){
    super();
    this.state = {
      city: ''
    }
  }
  handleInputChange(e){
    this.setState({
      city: e.target.value
    });
  }
  handleGetWeather(e){
    const {city} = this.state;

    if (city){
      this.context.router.push('/forecast/' + city);
    }
  }
  render(){
    return (
      <GetWeatherForm
        onInputChange = {(e) => { this.handleInputChange(e) }}
        onGetWeather = {(e) => { this.handleGetWeather(e) }} />
    )
  }
}
GetWeatherContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default GetWeatherContainer;
