import React, { Component } from 'react';
import '../css/App.css';
import Question from './Question.jsx';
// import components

class App extends Component {

  render() {
    return (
      <div className="app">
        Trivia!
      <Question question="1. Who is the realest JoJo?"></Question>
      <Question question="2. Who is not a Vampire?"></Question>
      <Question question="3. Who has died the most?"></Question>
      <Question question="4. Which is not a movie?"></Question>
      <Question question="5. "></Question>
      </div>
    );
  }
}

export default App;