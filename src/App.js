import "./App.css";
import Weather from "./Weather";
import { Audio } from "react-loader-spinner";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello World </h1>
        <Weather />
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="loading"
          wrapperStyle
          wrapperClass
        />
        <footer>
          This project was coded by Madhura and is open-sourced on{" "}
          <a
            href="https://github.com/madhuracodes/react-weather"
            target="_blank"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a href="https://maddy-react-weather.netlify.app/" target="_blank">
            Netlify
          </a>{" "}
        </footer>
      </header>
    </div>
  );
}

export default App;
