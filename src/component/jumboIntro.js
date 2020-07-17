import React from "react";

const JumboIntro = () => {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container">
        <h1 className="display-4">Desafios </h1>
        <p className="lead">
          Esta e uma brincadeira que envolve a Clara, o papai e a mamae. Serao 3
          desafios, para cada um a Clara recebera um presente.
          <br /> <strong>O primeiro desafio:</strong>
          <br /> - Primeira parte sera resolvida pela mamae da Clara, nessa
          etapa a Clara pode ajudar a mamae. Ali existe a senha para desbloquear
          o segundo desafio.
          <br /> - A segunda parte sera apenas para a Clara, sem ajuda da Mamae.{" "}
          <br />
          <strong>O segundo desafio:</strong>
          <br /> - A primeira etapa do segundo desafio, devera ser solucionado
          pelo papai da Clara. Ele vai encontrar uma parte da senha que
          desbloqueara o terceiro desafio.
          <br /> - A segunda etapa, novamente sera resolvida pela Clara sozinha.
          O terceiro desafio: Esse sera resolvido pela Clara{" "}
          <strong>sem ajuda de ninguem</strong>
          <br />
          <strong>Terceiro desafio:</strong>
          <br />
          So para Clara!
        </p>
        <h6>
          <strong>Obs:</strong> Tudo funciona perfeitamente. Nao adianta me
          ligar pra pedir ajuda, dica, nada. Me esquece!
        </h6>
      </div>
    </div>
  );
};
export default JumboIntro;
