import React, { useState, ReactNode, createContext } from "react";
import api from "../services/api";

type UserContextData = {
  user: UserProps;
  findUser: boolean;
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

type RepositoriesProps = [{
  name: string;
  description: string;
  language: string;
  created_at: string;
  updated_at: string;
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

  const [repository, setRepository] = useState<RepositoriesProps | []>([])

  const [findUser, setFindUser] = useState<boolean>(false)

  // Functions
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

    setFindUser(true)
  };

  const getRepositories = async (res: []) => {
    const arr: React.SetStateAction<RepositoriesProps | undefined> | { name: string; description: string; language: string; created_at: string; updated_at: string; }[] = []

    res.map(({ name, description, language, created_at, updated_at }) => {
      const obj = {
        name,
        description,
        language,
        created_at,
        updated_at
      }

      arr.push(obj)
    })

    setRepository(arr)
  };

  // Aplication
  return (
    <UserContext.Provider value={{ user, getUser, findUser, getRepositories, repository }}>
      {children}
    </UserContext.Provider>
  )
}