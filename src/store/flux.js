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
          message:
            "Para completar esta etapa a Clara devera receber ajuda da mamae.",
          password: "teste",
          next: "primeiro",
        },
        {
          title: "Segundo Desafio",
          image: Clara2,
          message:
            "Para completar esta etapa a Clara devera receber ajuda do papai.",
          password: "white",
          next: "segundo",
        },
        {
          title: "Terceiro Desafio",
          image: Clara3,
          message: "Este a Clara devera resolver sozinha!",
          password: "white",
          next: "terceiro",
        },
      ],
    },
    actions: {},
  };
};

export default getState;