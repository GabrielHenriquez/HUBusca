import React, { useState, ReactNode, createContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Types
type UserContextData = {
  user: UserProps;
  repository: RepositoriesProps[];
  getUser: ({ avatar_url, name, login, location }: UserProps) => Promise<void>;
  getRepositories: (res: []) => Promise<void>;
};

type UserProps = {
  avatar_url?: string;
  name?: string;
  login?: string;
  location?: string;
  id?: number;
  followers?: number;
  following?: number;
  public_repos?: number;
};

export type UsersProps = {
  avatar_url?: string;
  name?: string;
  login?: string;
  location?: string;
};

type RepositoriesProps = {
  html_url: string;
  name: string;
  description: string;
  language: string;
  created_at: string;
  pushed_at: string;
};

type UserProviderProps = {
  children: ReactNode;
};

export const UserContext = createContext({} as UserContextData);

export default function UserProvider({ children }: UserProviderProps) {
  // States
  const [user, setUser] = useState<UserProps>({
    avatar_url: "",
    name: "",
    login: "",
    location: "",
    id: 0,
    followers: 0,
    following: 0,
    public_repos: 0,
  });

  const [repository, setRepository] = useState<RepositoriesProps[]>([]);

  // Functions
  const addZero = (number: number | string) => {
    const validate = number <= 9 ? "0" + number : number;
    return validate;
  };

  const getUser = async ({
    avatar_url,
    name,
    login,
    location,
    id,
    followers,
    following,
    public_repos,
  }: UserProps) => {
    setUser({
      avatar_url,
      name,
      login,
      location,
      id,
      followers,
      following,
      public_repos,
    });

    const obj = {
      avatar_url,
      name,
      login,
      location,
    };

    setUsersAsyncStorage(obj);
  };

  const setUsersAsyncStorage = async (objUser: UsersProps) => {
    if (objUser) {
      // Obtém os dados que estão no asyncStorage
      const response = (await AsyncStorage.getItem("@users")) || "[]";
      const res = JSON.parse(response);

      // Cria um array para armazenar os dados vindo do asyncStorage
      let usersInToAsync: any[] = [];

      if (res === null || res.length === 0) {
        // Verifica se tem algum usuário no asynStorage ou se está com array vazio
        usersInToAsync = [objUser]; // Estando vazio, adiciona o usuário vindo da pesquisa ao array

        //Adiciona o usuário ao asyncStorage e sai do if
        const jsonValue = JSON.stringify(usersInToAsync);
        await AsyncStorage.setItem("@users", jsonValue);
        return;
      } else {
        usersInToAsync = res;

        const findUserAtArray = usersInToAsync.find(
          (user) => user.name === objUser.name
        );

        if (findUserAtArray) {
          //Se o usuário for encontrado no array
          const removeUserAtArray = usersInToAsync.filter(
            (user) => user.login !== findUserAtArray.login
          );

          if (removeUserAtArray) {
            // Se o usuário foi removido do array
            if (removeUserAtArray.length === 0) {
              // Se não tiver nenhum usuário após a remoção adiciona o usuário vindo da pesquisa ao asyncStorage
              usersInToAsync = [objUser];

              const jsonValue = JSON.stringify(usersInToAsync);
              await AsyncStorage.setItem("@users", jsonValue);
            } else {
              // Se tiver usuário após a remoção, remove ele e adiciona novamente para voltar ao topo
              usersInToAsync = removeUserAtArray;
              usersInToAsync.push(objUser);

              const jsonValue = JSON.stringify(usersInToAsync);
              await AsyncStorage.setItem("@users", jsonValue);
            }
          }
        } else {
          // Se o usuário não for encontrado obtém o que já tem no asyncStorage e adiciona novamente o usuário vindo da pesquisa
          const response = (await AsyncStorage.getItem("@users")) || "[]";
          const res = JSON.parse(response);

          if (res === null) {
            return;
          } else {
            usersInToAsync = res;
            usersInToAsync.push(objUser);

            const jsonValue = JSON.stringify(usersInToAsync);
            await AsyncStorage.setItem("@users", jsonValue);
          }
        }
      }
    }
  };

  const getRepositories = async (res: []) => {
    const arr: RepositoriesProps[] = [];

    res.map(
      ({ html_url, name, description, language, created_at, pushed_at }) => {
        const dataCreate = new Date(created_at);
        const dataPush = new Date(pushed_at);
        const dateFormatedCreate =
          addZero(dataCreate.getDate().toString()) +
          "/" +
          addZero(dataCreate.getMonth() + 1).toString() +
          "/" +
          dataCreate.getFullYear();
        const dateFormatedPush =
          addZero(dataPush.getDate().toString()) +
          "/" +
          addZero(dataPush.getMonth() + 1).toString() +
          "/" +
          dataPush.getFullYear();

        const obj = {
          html_url,
          name,
          description,
          language,
          created_at: dateFormatedCreate,
          pushed_at: dateFormatedPush,
        };

        arr.push(obj);
      }
    );

    setRepository(arr);
  };

  // Aplication
  return (
    <UserContext.Provider
      value={{ user, getUser, getRepositories, repository }}
    >
      {children}
    </UserContext.Provider>
  );
}
