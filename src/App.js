import React, { Component } from 'react';
import Header from './Header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className='App'>
          <div className='intro'>
            <p>
              To begin viewing the latest school data please click the button
              below.
            </p>
            <p>The data that you will be provided with includes:</p>
            <ul>
              <li>School Name</li>
              <li>School Name Alias (if present in data)</li>
              <li>School Website</li>
              <li>School City</li>
              <li>School State</li>
              <li>School Zipcode</li>
              <li>The Total Number of Students</li>
              <li>Data on the School's Program Percentage</li>
              <li>Data on the School's Race Ethnicity</li>
            </ul>
          </div>

          <div>
            <button>Let's Begin!</button>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
