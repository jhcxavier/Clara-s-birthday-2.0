import React, { useState } from "react";
import Enigma from "../img/Enigma1.png";
import { Link } from "react-router-dom";
import Wrong from "../component/wrong";
import acertou from "../img/acertou.gif";

const Primeiro = () => {
  const [value, setValue] = useState("");
  const [showAnswer, setShowAnswer] = useState(false);
  const [wrong, setWrong] = useState(false);
  const [button, setButton] = useState(true);
  let next = "";
  let answer = "A senha para desbloquear o proximo desafio é Aniversariante*!";
  // let answer = "test";

  return (
    <div className="container">
      <div className="text-center mt-5">
        <h1>Primeiro Desafio</h1>
      </div>
      <p>
        <strong>Para a Mamãe da Clara</strong>
      </p>
      <p className="">
        Na primeira etapa a mamãe deverá descobrir a mensagem escondida
        na sequência de números. Uma vez que descoberta a mensagem, a Clara
        poderá realizar a segunda etapa da primeira fase!
      </p>
      <p>
        Dica!!
        <br />
        Para desvendar esse mistério a mamãe deverá pesquisar{" "}
        <strong>ASCII</strong>.
      </p>
      <div className="text-center mt-5">
        <img className="" src={Enigma} />
        <p>Digite a resposta abaixo:</p>
        <input onChange={(e) => setValue(e.target.value)} />
        <br />
        <button
          type="button"
          className="btn btn-primary btn-sm mt-2"
          onClick={() => {
            if (value === answer) {
              setShowAnswer(!showAnswer);
              setWrong(false);
              setButton(!button);
              next = "/primeiro2";
            } else {
              setWrong(!wrong);
            }
          }}
        >
          Conferir
        </button>
        {showAnswer && (
          <div>
            <img src={acertou} />
            <h3>
              Parabéns mamãe vc concliu a primeira etapa, agora é a vez da
              Clara!!
            </h3>

            <p className="mt-3">
              <strong>Agora é a vez da Clara</strong>
            </p>
            <Link to="/primeiro2">
              <button type="button" className="btn btn-primary btn-sm mt-2">
                Comece
              </button>
            </Link>
          </div>
        )}
        {wrong && (
          <div>
            {" "}
            <h4 className="mt-2">Que isso Mariana? Tá de brincadeira neh?!</h4>
            <Wrong />{" "}
          </div>
        )}
      </div>
    </div>
  );
};
export default Primeiro;
