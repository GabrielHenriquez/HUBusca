import React, {useContext} from "react";
import AppRoutes from "./app.routes";
import HomeRoutes from "./home.routes";

import { UserContext } from "../contexts/UserContext";


export default function Routes() {
  // States or Contexts
  const {findUser} = useContext(UserContext);

  // Aplication
  return (
      findUser ? <AppRoutes/> : <HomeRoutes />
  )
}