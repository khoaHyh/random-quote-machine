import React, { Component } from "react";
import "./App.css";
import ReactFCCtest from "react-fcctest";



class App extends Component {

  // async componentDidMount() {
  //   const url = "https://type.fit/api/quotes"
  // }

  render() {
    return (
      <div className="App">
        <ReactFCCtest />
        <div id="quote-box">
          <div id="text">Random Quote goes here</div>
          <div id="author">Respective Author</div>
          <div className="buttons">
            <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank" rel="noreferrer noopener">Tweet Quote button</a>
            <div id="new-quote">New Quote button</div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
