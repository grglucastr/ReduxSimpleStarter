import React, {Component} from 'react';

export default class SearchBar extends Component{

  constructor(props){
    super(props);

    this.state = {term: ''};
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event){
    this.setState({term: event.target.value});
  }

  onFormSubmit(event){
    event.preventDefault();

    // We need to go and fetch weather data
  }

  render(){
    return(
      <form className="input-group" onSubmit={this.onFormSubmit}>
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
          />
        <span className="input-group-btn">
          <input type="submit" className="btn btn-secondary" value="Submit" />
        </span>

      </form>
    )
  }
}
