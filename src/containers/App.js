import React, { Component } from "react";
import "./App.css";
import ReactFCCtest from "react-fcctest";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
      newQuote: false
    }
  }

  async componentDidMount() {
    const url = "https://type.fit/api/quotes";
    const response = await fetch(url);
    const data = await response.json();
    let randomIndex = Math.round(Math.random() * (data.length - 1));
    this.setState({
      quote: data[randomIndex].text,
      author: data[randomIndex].author
    });
  }

  render() {
    const { quote, author } = this.state;
    return (
      <div className="App">
        <ReactFCCtest />
        <div id="quote-box">
          <div id="text">{quote}</div>
          <div id="author">{author}</div>
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
