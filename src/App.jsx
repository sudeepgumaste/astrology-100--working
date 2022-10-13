import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  const [stepCount, setStepCount] = useState(-1);

  const loadingText = [
    "Hold on",
    "Calculating distances of heavenly bodies",
    "Almost there...",
  ];

  const resultText =
    "Floating rocks in space don't give a fuck about your existence";

  const handleSubmit = (e) => {
    e.preventDefault();
    setStepCount(0);
    const interval = window.setInterval(() => {
      setStepCount((count) => {
        if (count === loadingText.length) {
          clearInterval(interval);
          return count;
        }
        return count + 1;
      });
    }, 2000);
  };

  return (
    <div className="App">
      <h1>Your daily astrology - 100% accurate</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            className="input"
            placeholder="What's your sun sign?"
            style={{
              fontSize: "20px",
              padding: "16px",
              borderRadius: "16px",
              border: "none",
              marginBottom: "24px",
            }}
          />
        </div>
        <div>
          <button type="submit">Search</button>
        </div>
      </form>
      <h3>{loadingText[stepCount]}</h3>
      <h2>{stepCount === loadingText.length && resultText}</h2>
    </div>
  );
}

export default App;
