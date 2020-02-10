import React, { Component } from 'react';
import Answers from './Answers.jsx';
// import components


class Question extends Component {
  
  render() {
    return (
      <div>
        <p>
          {this.props.question}
          
        </p>
        <button><Answers answer={this.props.answers[0]}></Answers></button>
        <button><Answers answer={this.props.answers[1]}></Answers></button>
        <button><Answers answer={this.props.answers[2]}></Answers></button>
        <button><Answers answer={this.props.answers[3]}></Answers></button>
        {/* Add your QuestionText, Reset Button and AnswerButtons here.   */}
      </div>
    );
  }
}


export default Question;