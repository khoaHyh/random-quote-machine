import './App.css';
import ReactFCCtest from 'react-fcctest';

function App() {
  return (
    <div className="App">
      <ReactFCCtest />
      <div id="quote-box">
        <div id="text"></div>
        <div id="author"></div>
        <div id="new-quote"></div>
        <a id="tweet-quote" href="twitter.com/intent/tweet" target="_blank" rel="noreferrer noopener"> </a>
      </div>
    </div>
  );
}

export default App;
