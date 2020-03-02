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
        <button onClick={() => this.props.click(0)}><Answers answer={this.props.answers[0]}></Answers></button>
        <button onClick={() => this.props.click(1)}><Answers answer={this.props.answers[1]}></Answers></button>
        <button onClick={() => this.props.click(2)}><Answers answer={this.props.answers[2]}></Answers></button>
        <button onClick={() => this.props.click(3)}><Answers answer={this.props.answers[3]}></Answers></button>
      </div>
    );
  }

}


export default Question;