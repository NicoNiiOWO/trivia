import React, { Component } from 'react';
// import components


class Question extends Component {
  
  render() {
    return (
      <div>
        <p>
          {this.props.question}
        </p>
        {/* Add your QuestionText, Reset Button and AnswerButtons here.   */}
      </div>
    );
  }
}


export default Question;