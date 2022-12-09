import React, { useState, ReactNode, createContext } from "react";
import api from "../services/api";

type UserContextData = {
  user: UserProps;
  getUser: ({ avatar_url, name, login, location }: UserProps) => Promise<void>;
  findUser: boolean;
}

type UserProps = {
  avatar_url: string;
  name: string;
  login: string;
  location: string;
}

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
  })
  
  const [findUser, setFindUser] = useState<boolean>(false)

  // Functions
  const getUser = async ({ avatar_url, name, login, location }: UserProps) => {
    setUser({
      avatar_url,
      name,
      login,
      location
    })

    setFindUser(true)
  }

  // Aplication
  return (
    <UserContext.Provider value={{ user, getUser, findUser }}>
      {children}
    </UserContext.Provider>
  )
}