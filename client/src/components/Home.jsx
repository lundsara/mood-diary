import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
  render() {
    return (
      <div id="home">
      <p id="welcome">Welcome to Mood Diary! <br /> Keep track of your thoughts with <br/>the benefit of artificial intelligence to help you<br/> keep track of your mood!</p>
      <p id="enter"><Link to="/login">Enter</Link></p>
    </div>
    );
  };
}

export default Home;
