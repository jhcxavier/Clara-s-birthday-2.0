import Clara1 from "../img/Clara1.jpg";
import Clara2 from "../img/Clara21.jpg";
import Clara3 from "../img/Clara3.jpg";

const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      flipImages: [
        {
          title: "Primeiro desafio",
          image: Clara1,
          message: "Senha = você sabe",
          password: "você sabe",
          next: "/primeiro",
        },
        {
          title: "Segundo Desafio",
          image: Clara2,
          message:
            "Para completar esta etapa a Clara devera receber ajuda do papai.",
          password: "Aniversariante*!",
          next: "/segundo",
        },
        {
          title: "Terceiro Desafio",
          image: Clara3,
          message: "Vinte cinco tira quanto fica?",
          password: "quinze",
          next: "/terceiro",
        },
      ],
    },
    actions: {},
  };
};

export default getState;
