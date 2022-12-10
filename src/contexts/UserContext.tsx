import React, { useState, ReactNode, createContext, useEffect } from "react";

type UserContextData = {
  user: UserProps;
  users: UsersProps;
  repository: RepositoriesProps;
  getUser: ({ avatar_url, name, login, location }: UserProps) => Promise<void>;
  getRepositories: (res: []) => Promise<void>;
}

type UserProps = {
  avatar_url: string;
  name: string;
  login: string;
  location: string;
  id: number;
  followers: number;
  following: number;
  public_repos: number;
}

type UsersProps = [{
  avatar_url: string;
  name: string;
  login: string;
  location: string;
}];

type RepositoriesProps = [{
  html_url: string;
  name: string;
  description: string;
  language: string;
  created_at: string;
  pushed_at: string;
}];

type UserProviderProps = {
  children: ReactNode,
}

export const UserContext = createContext({} as UserContextData);

export default function UserProvider({ children }: UserProviderProps) {

  // States
  const [user, setUser] = useState<UserProps>({
    avatar_url: '',
    name: '',
    login: '',
    location: '',
    id: 0,
    followers: 0,
    following: 0,
    public_repos: 0,
  })

  const [users, setUsers] = useState<UsersProps | []>([]);

  const [repository, setRepository] = useState<RepositoriesProps | []>([]);

  // Functions
  const addZero = (number: number) => {
    const validate = number <= 9 ? "0" + number : number
    return validate
  };

  const getUser = async ({ avatar_url, name, login, location, id, followers, following, public_repos }: UserProps) => {
    setUser({
      avatar_url,
      name,
      login,
      location,
      id,
      followers,
      following,
      public_repos,
    })

    const obj = {
      avatar_url,
      name,
      login,
      location,
    }

    setUsers([...users, obj]);
    getUsersUniques(obj)
  }

  const getUsersUniques = (objUser: UserProps) => {
    if (users.length > 0) {
      const findUserAtArray = users.find((user) => user.name === objUser.name)
      if (findUserAtArray) {
        const removeUserAtArray = users.filter((user) => user.login !== findUserAtArray.login)
        if (removeUserAtArray) setUsers([...users]);
        users.reverse()
      } else {
        setUsers([...users, objUser]);
        users.reverse()
      }
    }
  };

  const getRepositories = async (res: []) => {
    const arr: React.SetStateAction<RepositoriesProps | undefined> | { name: string; description: string; language: string; created_at: string; pushed_at: string; }[] = []

    res.map(({ html_url, name, description, language, created_at, pushed_at }) => {
      const dataCreate = new Date(created_at);
      const dataPush = new Date(pushed_at);
      const dateFormatedCreate = (addZero(dataCreate.getDate().toString()) + "/" + (addZero(dataCreate.getMonth() + 1).toString()) + "/" + dataCreate.getFullYear());
      const dateFormatedPush = (addZero(dataPush.getDate().toString()) + "/" + (addZero(dataPush.getMonth() + 1).toString()) + "/" + dataPush.getFullYear());

      const obj = {
        html_url,
        name,
        description,
        language,
        created_at: dateFormatedCreate,
        pushed_at: dateFormatedPush
      }

      arr.push(obj)
    })

    setRepository(arr)
  };

  // Aplication
  return (
    <UserContext.Provider value={{ user, getUser, getRepositories, repository, users }}>
      {children}
    </UserContext.Provider>
  )
}