import React from "react";
import "./App.css";
import JumboIntro from "./component/jumboIntro";
import Presentes from "./component/presentes";

function App(props) {
  return (
    <div className="container">
      <div className="text-center mt-5">
        <h1>Bem Vindo ao Desafio da Clara!</h1>
        <br />
        <JumboIntro />
        <h3 />

        <Presentes history={props.history} />

        <h3 className="mt-5">
          Boa sorte!! <i className="fas fa-gift" />
        </h3>
      </div>
    </div>
  );
}

export default App;
