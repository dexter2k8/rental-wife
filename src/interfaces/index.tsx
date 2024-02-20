import { ReactNode } from "react";

export interface IChildren {
  children: ReactNode;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IRegisterData extends ILoginData {
  is_hired?: boolean;
  confirm_password?: string;
  name?: string;
}

export interface IUserData {
  id?: number;
  name: string;
  email: string;
  contact?: string;
  gender?: string;
  location?: string;
  avatar_img: string;
  services?: string[];
  is_hired: boolean;
  description?: string;
}

export interface IAuthResponse {
  accessToken: string;
  user: IUserData;
}

export type TStatus = "Analisar" | "Aceita" | "Recusada";

export interface IProposal {
  user: { id: number; username: string; contact: string; avatar_img: string };
  id: number;
  status: TStatus;
  title: string;
  description: string;
}
