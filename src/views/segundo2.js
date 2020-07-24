import React, { useState } from "react";
import IntroSegundo2 from "../component/introSegundo2";
import Completed from "../component/completedChallenge";
import Failed from "../component/wrong";

const Segundo2 = () => {
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
  const [validation, setValidation] = useState("");
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
      <IntroSegundo2 />
      <div className="row mt-5">
        <p className="col">
          {number["2"]} -{" "}
          <input
            className="input"
            placeholder="x"
            onChange={(e) => {
              setResult({ ...result, result1: e.target.value });
            }}
          />{" "}
          = {number["1"]}
        </p>
        <p className="col">
          {number["4"]} -{" "}
          <input
            className="input"
            placeholder="x"
            onChange={(e) => {
              setResult({ ...result, result2: e.target.value });
            }}
          />{" "}
          = {number["3"]}
        </p>
        <p className="col">
          {number["6"]} -{" "}
          <input
            className="input"
            placeholder="x"
            onChange={(e) => {
              setResult({ ...result, result3: e.target.value });
            }}
          />{" "}
          = {number["5"]}
        </p>
        <p className="col">
          {number["8"]} -{" "}
          <input
            className="input"
            placeholder="x"
            onChange={(e) => {
              setResult({ ...result, result4: e.target.value });
            }}
          />{" "}
          = {number["7"]}
        </p>
      </div>
      <div className="row mt-3">
        <p className="col">
          {number["10"]} -{" "}
          <input
            className="input"
            placeholder="x"
            onChange={(e) => {
              setResult({ ...result, result5: e.target.value });
            }}
          />{" "}
          = {number["9"]}
        </p>
        <p className="col">
          {number["12"]} -{" "}
          <input
            className="input"
            placeholder="x"
            onChange={(e) => {
              setResult({ ...result, result6: e.target.value });
            }}
          />{" "}
          = {number["11"]}
        </p>
        <p className="col">
          {number["14"]} -{" "}
          <input
            className="input"
            placeholder="x"
            onChange={(e) => {
              setResult({ ...result, result7: e.target.value });
            }}
          />{" "}
          = {number["13"]}
        </p>
        <p className="col">
          {number["16"]} -{" "}
          <input
            className="input"
            placeholder="x"
            onChange={(e) => {
              setResult({ ...result, result8: e.target.value });
            }}
          />{" "}
          = {number["15"]}
        </p>
      </div>
      <button
        type="button"
        className="btn btn-outline-primary btn-sm mt-5"
        onClick={() => {
          setValidation(
            +result.result1 + +number["1"] === number["2"] &&
              +result.result2 + +number["3"] === number["4"] &&
              +result.result3 + +number["5"] === number["6"] &&
              +result.result4 + +number["7"] === number["8"] &&
              +result.result5 + +number["9"] === number["10"] &&
              +result.result6 + +number["11"] === number["12"] &&
              +result.result7 + +number["13"] === number["14"] &&
              +result.result8 + +number["15"] === number["16"] ? (
              <Completed />
            ) : (
              <Failed />
            )
          );
        }}
      >
        Conferir
      </button>
      <div>{validation}</div>
    </div>
  );
};
export default Segundo2;
