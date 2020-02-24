import React, { Component } from 'react';
import '../css/App.css';
import Question from './Question.jsx';
import Answers from './Answers.jsx';
import {buildFirebase} from '../clients/firebase.js';
// import components

function firebase() {
var database = buildFirebase();
var databaseRef = database.ref("/questions");
databaseRef.once("value").then(function(data) {
  const questions = data.val();
  return questions;
});
}


class App extends Component {
  constructor (props){
    super (props);
    this.state = {questions:firebase()};
  }


  render() {
    return (
      <div className="app">
        Trivia!
        {this.state.questions}
        <Question question="1. Who is the realest JoJo?" answers={['Bartholomew Jojo Simpson', "Jojo Siwa", "Jojo Rabbit", "Jotaro Kujo"]}></Question>

        {/* // <Answers answer="Bartholomew Jojo Simpson"></Answers>
        // <Answers answer="Jojo Siwa"></Answers>
        // <Answers answer="Jojo Rabbit"></Answers>
        // <Answers answer="Jotaro Kujo"></Answers>
      // <Question question="2. Who is not a Vampire?"></Question>
      //   <Answers answer=""></Answers>
      //   <Answers answer=""></Answers>
      //   <Answers answer=""></Answers>
      //   <Answers answer=""></Answers>
      // <Question question="3. Who has died the most?"></Question>
      //   <Answers answer=""></Answers>
      //   <Answers answer=""></Answers>
      //   <Answers answer="Piccolo"></Answers>
      //   <Answers answer=""></Answers>
      // <Question question="4. Which is not a movie?"></Question>
      //   <Answers answer=""></Answers>
      //   <Answers answer=""></Answers>
      //   <Answers answer=""></Answers>
      //   <Answers answer=""></Answers>
      // <Question question="5. Who is the greatest villan?"></Question>
      //   <Answers answer="Dio"></Answers>
      //   <Answers answer=""></Answers>
      //   <Answers answer=""></Answers>
      //   <Answers answer="Frieza"></Answers> */}

      </div>
    );
  }
}

export default App;