import React, { Component } from 'react';
import DayWeather from '../components/DayWeather';

class DetailContainer extends Component{
  constructor(){
    super();
    this.state = {
      city: '',
      isLoading: true
    }
  }
  componentDidMount(){
    this.setState({
      forecast: this.props.location.state.details,
      city: this.props.params.city,
      isLoading: false
    })
  }
  render(){
    return (
      <DayWeather
        isLoading = {this.state.isLoading}
        cityName = {this.state.city}
        forecast = {this.state.forecast}/>
    )
  }
}

DetailContainer.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default DetailContainer;
