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
