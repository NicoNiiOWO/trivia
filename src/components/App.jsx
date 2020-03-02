import React, { Component } from 'react';
import '../css/App.css';
import Question from './Question.jsx';
import Answers from './Answers.jsx';
import {buildFirebase, getRandomQuestion} from '../clients/firebase.js';
// import components

function firebase() {
var database = buildFirebase();
var databaseRef = database.ref("/questions");
var questions;
databaseRef.once("value").then(function(data) {
  questions = data.val();
  return questions;
});
}


class App extends Component {
  constructor (props){
    super (props);
    this.state = {questions: {}, randomQuestion: {
          choices: [
            "BartholomewJojoSimpson",
            "JoJoSiwa",
            "JojoRabbit",
            "JotaroKujo"
          ],
          correct_choice_index: 0,
          question_text:"Who is the best JoJo?",
          user_id: "ZbCvDadaM0SD9YjAXrHMEDLVGoj2"
  }};
    var database = buildFirebase();
    var databaseRef = database.ref("/questions");
    databaseRef.once("value").then((data)=> {
      this.setState({questions: data.val(), randomQuestion: getRandomQuestion(data.val())})
    });
   
  }
  
  handleClick(index){
    if(index === this.state.randomQuestion.correct_choice_index){
      console.log("AAAAAAA")
    }else{
      
    }
  }

  render() {
    return (
      <div className="app">
        Trivia!
        <Question click={(index) => this.handleClick(index)} question={this.state.randomQuestion.question_text} answers={this.state.randomQuestion.choices}></Question>
      </div>
    );
  }
}

export default App;