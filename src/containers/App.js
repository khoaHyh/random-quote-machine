import React, { useState, useEffect } from "react";
import "./App.css";
import ReactFCCtest from "react-fcctest";

const App = () => {
  const quoteVariable = useState('');
  let quote = quoteVariable[0];
  let setQuote = quoteVariable[1];

  const authorVariable = useState('');
  let author = authorVariable[0];
  let setAuthor = authorVariable[1];

  useEffect(() => generateRandomQuote(), []);

  const generateRandomQuote = async() => {
    try {
      const url = "https://type.fit/api/quotes";
      const response = await fetch(url);
      const data = await response.json();
      let randomIndex = Math.round(Math.random() * (data.length - 1));
      setQuote(data[randomIndex].text);
      setAuthor(data[randomIndex].author);
    } catch(err) {
      console.log(`error: ${err}`);
    }
  }

  return (
    <div className="App">
      <ReactFCCtest />
      <div id="quote-box">
        <div id="text">{quote}</div>
        <div id="author">{author}</div>
        <div className="buttons">
          <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank" rel="noreferrer noopener">Tweet Quote button</a>
          <button id="new-quote" onClick={generateRandomQuote}>New Quote</button>
        </div>
      </div>
    </div>
  );
}

// class App extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       quote: '',
//       author: ''
//     }
//     this.generateRandomQuote = this.generateRandomQuote.bind(this);
//   }

//   async componentDidMount() {
//     this.generateRandomQuote();
//   }

//   generateRandomQuote = async() => {
//     try {
//       const url = "https://type.fit/api/quotes";
//       const response = await fetch(url);
//       const data = await response.json();
//       let randomIndex = Math.round(Math.random() * (data.length - 1));
//       this.setState({
//         quote: data[randomIndex].text,
//         author: data[randomIndex].author
//       });
//     } catch(err) {
//       console.log(`error: ${err}`);
//     }
//   }

//   render() {
//     const { quote, author } = this.state;
//     return (
//       <div className="App">
//         <ReactFCCtest />
//         <div id="quote-box">
//           <div id="text">{quote}</div>
//           <div id="author">{author}</div>
//           <div className="buttons">
//             <a id="tweet-quote" href="https://twitter.com/intent/tweet" target="_blank" rel="noreferrer noopener">Tweet Quote button</a>
//             <button id="new-quote" onClick={this.generateRandomQuote}>New Quote</button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

export default App;
