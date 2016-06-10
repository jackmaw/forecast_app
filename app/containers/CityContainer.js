import React, { Component } from 'react';
import ForecastInfo from  '../components/ForecastInfo';
import { getForecast } from '../utils/openWeatherHelper';

class CityContainer extends Component{
  constructor(){
    super();
    this.state = {
      isLoading: true,
      forecast: '',
      city: ''
    };
  }
  async updateForecast(city, days){
    const forecast = await getForecast(city, 5);
    this.setState({
      isLoading: false,
      forecast,
      city
    });
  }
  handleOnDetail(e){
    const { forecast, city } = this.state;
    let detailsId = e.target.getAttribute('data-id');

    if(e.target.getAttribute('data-id')){
      detailsId  = e.target.getAttribute('data-id');
    } else {
      detailsId  = e.target.parentNode.getAttribute('data-id');
    }
    this.context.router.push({
        pathname: '/forecast/details/' + city,
        state:{
          details: forecast.list[detailsId]
        }
    });
  }
  componentDidMount() {
    this.updateForecast(this.props.params.city, 5);
  }
  componentDidUpdate() {
    const city = this.props.params.city;
    if (!this.state.isLoading && city !== this.state.city){
      this.updateForecast(city, 5);
    }
  }
  render() {
      return (
        <ForecastInfo
          isLoading = {this.state.isLoading}
          city = {this.state.city}
          list = {this.state.forecast.list}
          onDetail = {(e) => this.handleOnDetail(e)} />
      )
  }
}

CityContainer.contextTypes = {
    router: React.PropTypes.object.isRequired
}

export default CityContainer;
