import React, { Component } from 'react';
import './App.css';
import Title from './components/Title.js';
import Paragraph from './components/Paragraph.js';
import Search from './components/Search.js';
import Percentile from './components/Percentile.js';
import removePunctuation from 'remove-punctuation';

class App extends Component {

  state = {
    percentile: 0
  }

  searchDatabase = async (event) => {
    event.preventDefault();
    const userInput = event.target.elements.userInput.value;
    const userInputLowercase = userInput.toLowerCase();
    const userInputNoPunctuation = removePunctuation(userInputLowercase);
    let splitString = userInputNoPunctuation.split(' ');
    await fetch('https://pacific-anchorage-19863.herokuapp.com', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(splitString)
    })
    .then(response => response.json())
    .then(number => {this.setState({ percentile: number })})
  }

  render() {
    return (
      <div>
	      <div>
	      	<div className="grid-container">
            <Title />
            <Paragraph />
          </div>
          <div className="flex">
	      	  <Search searchDatabase={this.searchDatabase}/>
            <Percentile percentile={this.state.percentile}/>
          </div>
	      </div>
      </div>
    )
  }
}

export default App;