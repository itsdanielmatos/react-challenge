import React, { Component } from 'react';

import {
  Search,
  SelectedList
}
from './components'

import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      searchValue: '',
      words: []
    }
  }

  componentDidMount() {
    this.list.then((words) => {
      this.setState({words: words})
    }).catch((error) => {
      console.warn("Errors while fetching words");
      console.warn(error);
    })
  }

  /* auto biding */
  onChange = (e) => {
    const searchValue = e.target.value
    this.setState({ searchValue })
  }

  get list(){
    return new Promise((resolve, reject) => {
      fetch("https://api.datamuse.com/words?ml=programming&max=25")
      .then(response => response.json())
      .then(json => {
        var words = json.map((word, index) => {
          return {id: index, text: word.word}
        })
        words.sort((a, b) => a.text.localeCompare(b.text))
        resolve(words);
      }).catch((error) => reject(error))
    })
  }

  render() {
    const { searchValue } = this.state

    return (
      <div className="App">
        <Search searchValue={searchValue} onChange={this.onChange} disabled={this.state.words.length === 0} />
        <SelectedList searchValue={searchValue} list={this.state.words} />
      </div>
    );
  }
}

export default App;
