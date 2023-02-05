import logo from "./logo.svg";
import "./App.css";
import "./Assets/Style/myStyle.css";
import NavigationBar from "./Components/NavigationBar";
import Intro from "./Components/Intro";
import Trending from "./Components/Trending";
import MarvelDc from "./Components/MarvelDc";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

      <div id="home" className="myBg">
        <NavigationBar />
        <Intro />
      </div>
      <div id="trending" className="trending">
        <Trending />
      </div>
      <div id="marveldc" className="marveldc">
        <MarvelDc />
      </div>
      <Footer />
    </div>
  );
}

export default App;
