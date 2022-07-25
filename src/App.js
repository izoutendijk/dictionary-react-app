import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} alt="logo" className="App-logo img-fluid"></img>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer text-center">
          Open Source Code by Iris Zoutendijk
        </footer>
      </div>
    </div>
  );
}

export default App;
