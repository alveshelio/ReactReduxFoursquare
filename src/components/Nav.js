import React, { Component } from 'react';
import superagent from 'superagent';

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zipCode: ''
    }
  }

  searchVenues() {
  const url = 'https://api.foursquare.com/v2/venues/search';
  const params = {
    v: '20140806',
    near: this.state.zipCode, // zip code, cities
    client_id: 'DDIG32TNI14SDRAVBE4EBJREFVVKG42VHYQPG3I2EGWBY20K',
    client_secret: 'ZXXCESHTYFZFD35YQJEBJQOBQKF0ZAMN2OLLYRRYHINJ5MZT',
  };

  superagent
    .get(url)
    .query(params)
    .set('Accept', 'application/json')
    .end((err, response) => {
      const venues = response.body.response.venues;

      console.log('response', JSON.stringify(venues, 0, 2));
    })
  }

  updateZipCode(e) {
    e.preventDefault();
    this.setState({zipCode: e.target.value});
  }

  render() {
    return (
      <div>
        <input onChange={this.updateZipCode.bind(this)} value={this.state.zipCode} type='text' placeholder='Zip code' />
        <button onClick={this.searchVenues.bind(this)}>Search</button>
      </div>
    );
  }
}
