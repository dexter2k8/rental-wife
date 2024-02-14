import { createContext, useEffect, useState } from "react";
import { IChildren, ILoginData, IRegisterData, IUserData } from "../interfaces";
import { user, worker } from "../mock/users";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

interface IAuthContext {
  userData?: IUserData;
  LoginUser: (data: ILoginData) => void;
  RegisterUser: (data: IRegisterData) => void;
}

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: IChildren) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState<IUserData>();

  const LoginUser = async (data: ILoginData) => {
    try {
      // Fake data for testing
      data.email === "user@mail.com"
        ? setUserData(user)
        : data.email === "kenzinho@mail.com"
        ? setUserData(worker)
        : (() => {
            throw new Error("Usuário ou senha inválidos");
          })();

      // const res = await axios.post<IAuthResponse>("/login", data);
      // const { user, token } = res.data;
      // setUserData(user);
      // axios.defaults.headers.authorization = `Bearer ${token}`;
      // localStorage.setItem("@rental:token", token);

      navigate("/dashboard");
    } catch (error) {
      console.error(error);
      toast.error("Ops! Algo deu errado");
    }
  };

  const RegisterUser = async (data: IRegisterData) => {
    try {
      // await axios.post("/api/users", data);
      // navigate("/profile");
    } catch (error) {
      console.error(error);
      toast.error("Ops! Algo deu errado");
    }
  };

  useEffect(() => {
    const LoadUser = async () => {
      const token = localStorage.getItem("@rental:token");
      if (token) {
        try {
          // axios.defaults.headers.authorization = `Bearer ${token}`;
          // const { user } = await axios.get<IUserData>("/user");
          // setUserData(user);
        } catch (error) {
          console.error(error);
          toast.error("Ops! Algo deu errado");
        }
      }
    };
    LoadUser();
  }, []);

  const values = { userData, setUserData, LoginUser, RegisterUser };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
