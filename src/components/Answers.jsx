import React, { Component } from 'react';
// import components


class Answers extends Component {
  
    render() {
      return (
        <div>
          <p>
            {this.props.answer}
          </p>
        </div>
      );
    }
  }
  
  
  export default Answers;