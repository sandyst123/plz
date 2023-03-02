import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let [title, changetitle] = useState("wanted Pre-onboarding course");
  let [menu, changemenu] = useState(["page A", "page B", "page C"]);
  return (
    <div className="App">
      <div className="top">
        <h4>{title}</h4>
      </div>
      <div className="menu">
        <h4>
          <sapn>{menu[0]}</sapn>
        </h4>
        <h4>{menu[1]}</h4>
        <h4>{menu[2]}</h4>
      </div>
    </div>
  );
}

export default App;
