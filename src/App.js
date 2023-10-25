import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header bg-wed">
        <img
          src="https://th.bing.com/th/id/OIP.XNOBql0xYwQPSXE2f729_AHaE8?pid=ImgDet&rs=1"
          className="App-logo"
          alt="logo"
        />
        <p className="text-wed-purple">
          I love inko!<code></code>
        </p>
        <a
          className="text-wed-dark underline"
          href="https://wed.company/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn WED
        </a>
      </header>
    </div>
  );
}

export default App;
