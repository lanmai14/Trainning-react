// import logo from "./logo.svg";
import "./App.css";
import Bill from "./Components/Bill";
import Tips from "./Components/Tips";
import People from "./Components/People";
import "./style/scss/main.scss";
import Amount from "./Components/Amount";
import Total from "./Components/Total";
import Calc from "./Components/Calc";

function App() {
  return (
    <div>
      <h1 className="calculator__heading">
        Spli <br />
        tter
      </h1>
      <Bill />
      <Tips />
      <People />
      <Amount />
      <Total />
      <Calc />
    </div>
  );
}

export default App;
