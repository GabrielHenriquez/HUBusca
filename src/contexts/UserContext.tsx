import React, { useState, ReactNode, createContext } from "react";
import api from "../services/api";

type UserContextData = {
  user: UserProps;
  getUser: ({avatar_url, name, login, location}: UserProps) => Promise<void>
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

  // Functions
  const getUser = async ({avatar_url, name, login, location}: UserProps) => {
    console.log(avatar_url);
    console.log(name);
    console.log(login);
    console.log(location);
  }

  // Aplication
  return (
    <UserContext.Provider value={{ user, getUser }}>
      {children}
    </UserContext.Provider>
  )
}