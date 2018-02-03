import React, { Component } from 'react';
import Fuse from 'fuse.js'

import {
  Search,
  SelectedList,
  SearchOptions
}
from './components'

import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      searchValue: '',
      words: [],
      options: {
        caseSensitive: false,
        shouldSort: false,
        includeScore: true,
        threshold: 0.3,
        tokenize: true,
        matchAllTokens: true,
        keys:["text"]
      },
      fuse: new Fuse([],{})
    }
  }

  componentDidMount() {
    this.list.then((words) => {
      this.setState({
        words: words,
        fuse: new Fuse(words, this.state.options)
      });
    }).catch((error) => {
      console.warn("Errors while fetching words");
      console.warn(error);
    })
  }

  handleOptions = (options) => {
    var newOptions = Object.assign(this.state.options,options);
    this.setState({options: newOptions,
      fuse: new Fuse(this.state.words, newOptions)
    });
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
        <Search searchValue={searchValue} onChange={this.onChange} disabled={!this.state.words.length} />
        <SearchOptions disabled={!this.state.words.length} handleOptions={this.handleOptions}/>
        <SelectedList searchValue={searchValue} list={this.state.words} fuse={this.state.fuse} />
      </div>
    );
  }
}

export default App;
