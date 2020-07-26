import React, { useState } from "react";
import IntroPrimeiro2 from "../component/introPrimeiro2";
import Completed from "../component/completedChallenge";
import Wrong from "../component/wrong";

const Primeiro2 = () => {
  const [result, setResult] = useState({
    result1: "",
    result2: "",
    result3: "",
    result4: "",
    result5: "",
    result6: "",
    result7: "",
    result8: "",
  });
  const [validation, setValidation] = useState();
  const [number, setNumber] = useState({
    "1": generateNumber(),
    "2": generateNumber() + 20,
    "3": generateNumber(),
    "4": generateNumber() + 20,
    "5": generateNumber(),
    "6": generateNumber() + 20,
    "7": generateNumber(),
    "8": generateNumber() + 20,
    "9": generateNumber(),
    "10": generateNumber() + 20,
    "11": generateNumber(),
    "12": generateNumber() + 20,
    "13": generateNumber(),
    "14": generateNumber() + 20,
    "15": generateNumber(),
    "16": generateNumber() + 20,
  });

  function generateNumber() {
    let number = Math.floor(Math.random() * 20 + 1);
    return number;
  }
  return (
    <div className="container">
      <IntroPrimeiro2 />
      <div className="row mt-5">
        <p className="col">
          {number["1"]} +{" "}
          <input
            className="input"
            placeholder="x"
            onChange={(e) => {
              setResult({ ...result, result1: e.target.value });
            }}
          />{" "}
          = {number["2"]}
        </p>
        <p className="col">
          {number["3"]} +{" "}
          <input
            className="input"
            placeholder="x"
            onChange={(e) => {
              setResult({ ...result, result2: e.target.value });
            }}
          />{" "}
          = {number["4"]}
        </p>
        <p className="col">
          {number["5"]} +{" "}
          <input
            className="input"
            placeholder="x"
            onChange={(e) => {
              setResult({ ...result, result3: e.target.value });
            }}
          />{" "}
          = {number["6"]}
        </p>
        <p className="col">
          {number["7"]} +{" "}
          <input
            className="input"
            placeholder="x"
            onChange={(e) => {
              setResult({ ...result, result4: e.target.value });
            }}
          />{" "}
          = {number["8"]}
        </p>
      </div>
      <div className="row mt-3">
        <p className="col">
          {number["9"]} +{" "}
          <input
            className="input"
            placeholder="x"
            onChange={(e) => {
              setResult({ ...result, result5: e.target.value });
            }}
          />{" "}
          = {number["10"]}
        </p>
        <p className="col">
          {number["11"]} +{" "}
          <input
            className="input"
            placeholder="x"
            onChange={(e) => {
              setResult({ ...result, result6: e.target.value });
            }}
          />{" "}
          = {number["12"]}
        </p>
        <p className="col">
          {number["13"]} +{" "}
          <input
            className="input"
            placeholder="x"
            onChange={(e) => {
              setResult({ ...result, result7: e.target.value });
            }}
          />{" "}
          = {number["14"]}
        </p>
        <p className="col">
          {number["15"]} +{" "}
          <input
            type="text"
            className="input"
            placeholder="x"
            onChange={(e) => {
              setResult({ ...result, result8: e.target.value });
            }}
          />{" "}
          = {number["16"]}
        </p>
      </div>
      <button
        type="button"
        className="btn btn-outline-primary btn-sm mt-5"
        onClick={() => {
          // console.log();
          // console.log(+number["16"] - +number["15"] === +result.result8);
          // console.log(typeof result.result8);
          if (
            +number["2"] - +number["1"] === +result.result1 &&
            +number["4"] - +number["3"] === +result.result2 &&
            +number["6"] - +number["5"] === +result.result3 &&
            +number["8"] - +number["7"] === +result.result4 &&
            +number["10"] - +number["9"] === +result.result5 &&
            +number["12"] - +number["11"] === +result.result6 &&
            +number["14"] - +number["13"] === +result.result7 &&
            +number["16"] - +number["15"] === +result.result8
          ) {
            setValidation(<Completed />);
          } else {
            setValidation(<Wrong />);
          }
          // console.log(+number["14"] - +number["13"] !== +result.result7);
          // console.log(+number["16"] - +number["15"] !== +result.result8);
          // setValidation(
          // console.log(+number["16"] - +number["15"]),
          // +number["2"] - +number["1"] !== +result.result1 &&
          //   +number["4"] - +number["3"] !== +result.result2 &&
          //   +number["6"] - +number["5"] !== +result.result3 &&
          //   +number["8"] - +number["7"] !== +result.result4 &&
          //   +number["10"] - +number["9"] !== +result.result5 &&
          //   +number["12"] - +number["11"] !== +result.result6 &&
          //   +number["14"] - +number["13"] !== +result.result7 &&
          //     +number["16"] - +number["15"] !== +result.result8 ? (
          //     <Wrong />
          //   ) : (
          //     <Completed />
          //   )
          // );
        }}
      >
        Conferir
      </button>
      <div>{validation}</div>
    </div>
  );
};
export default Primeiro2;
