import React from "react";

const JumboIntro = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Desafios </h1>
        <p className="lead">
          Está e uma brincadeira que envolve a Clara, o papai e a mamãe. Serão 3
          desafios, para cada um a Clara ganhará um presente.
          <br /> <strong>O primeiro desafio:</strong>
          <br /> - Primeira parte será resolvida pela Mariana, nessa
          etapa a Clara pode ajudar a mamãe. Ali existe a senha para desbloquear
          o segundo desafio.
          <br /> - A segunda parte será apenas para a Clara, sem ajuda da Mamãe.{" "}
          <br />
          <strong>O segundo desafio:</strong>
          <br /> - A primeira etapa do segundo desafio, deverá ser solucionado
          pelo papai da Clara. Ele vai encontrar uma parte da senha que
          desbloqueará o terceiro desafio.
          <br /> - A segunda etapa, novamente deverá ser resolvida pela Clara sem ajuda.
          O terceiro desafio: Esse será resolvido pela Clara{" "}
          <strong>sem ajuda</strong>
          <br />
          <strong>Terceiro desafio:</strong>
          <br />
          Segredo!
        </p>
        <h6>
          <strong>Obs:</strong> Tudo funciona perfeitamente. Não adianta me
          ligar pra pedir ajuda, dica, nada. Me esquece!
        </h6>
      </div>
    </div>
  );
};
export default JumboIntro;
