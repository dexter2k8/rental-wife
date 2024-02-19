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
];
