import { IProposal } from "../interfaces";

export const mockProposals: IProposal[] = [
  {
    user: {
      id: 0,
      username: "Joana",
      contact: "234-5678",
      avatar_img: "https://github.com/joaopimentel.png",
    },
    id: 0,
    title: "Troca de lâmpada",
    description: "Minha lâmpada queimou e precisa ser trocada.",
    status: "Analisar",
  },
  {
    user: {
      id: 1,
      username: "Maria",
      contact: "222-3333",
      avatar_img: "https://github.com/mariapimentel.png",
    },
    id: 1,
    title: "Troca de resistência",
    description: "Meu chuveiro queimou e precisa ser trocada a resistência.",
    status: "Aceita",
  },
];
