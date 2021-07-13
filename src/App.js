import React, { Component } from 'react';
import Header from './Header/Header';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoaded: false,
    };
  }

  // Make fetch request to get information
  componentDidMount() {
    // CHANGE API KEY TO YOUR OWN AT THE END OF THE LINK
    fetch(
      'https://api.data.gov/ed/collegescorecard/v1/schools/?school.operating=1&fields=id=240444,school.name,%20latest,school.city,school.state,school.zip,school.school_url,school.alias,school.accreditor&api_key={YOUR_API_KEY}',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      // update states of both and fill array with return json data
      .then((json) => {
        this.setState({
          isLoaded: true,
          data: json,
        });
      })
      .catch((error) => console.log('ERROR'));
  }

  handleLoadData(array_state, data_array) {
    if (!array_state) {
      return (
        <div>
          <h1>Loading...</h1>
        </div>
      );
    } else {
      return (
        <div>
          <ul>
            {data_array.results.map((info, index) => {
              return (
                <li className='schoolInfo' key={index}>
                  <p>
                    <u>School Name: </u>
                    {info['school.name']}
                  </p>
                  <p>
                    <u>Alias: </u>
                    {info['school.alias']}
                  </p>
                  <p>
                    <u>City: </u>
                    {info['school.city']}
                  </p>
                  <p>
                    <u>State: </u>
                    {info['school.state']}
                  </p>
                  <p>
                    <u>Zipcode: </u>
                    {info['school.zip']}
                  </p>
                  <p>
                    <u>Website: </u>
                    {info['school.school_url']}
                  </p>
                  <p>
                    <u>Accreditor: </u>
                    {info['school.accreditor']}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      );
    }
  }

  render() {
    let { isLoaded, data } = this.state; // deconstruct

    return (
      <div>
        <Header />
        <main className='App'>
          <div className='intro'>
            <p>
              Welcome! You have reached our latest school data collected by
              Data.gov.
            </p>
            <p>The data that you will be provided with includes:</p>
            <ul>
              <li>School Name</li>
              <li>School Name Alias (if present in data)</li>
              <li>School Website</li>
              <li>School City</li>
              <li>School State</li>
              <li>School Zipcode</li>
              <li>School Accreditor</li>
              <li>The Total Number of Students</li>
              <li>Data on the School's Program Percentage</li>
              <li>Data on the School's Race Ethnicity</li>
            </ul>
          </div>
          <div>
            <h3>Recent School Data</h3>

            <button className='print-button' onClick={window.print}>
              Print
            </button>
            <a href='./src/src/app.pdf' download>
              Download PDF
            </a>
            <div className='dataList'>
              {this.handleLoadData(isLoaded, data)}
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
