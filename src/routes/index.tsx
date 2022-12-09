import React, {useContext} from "react";
import AppRoutes from "./app.routes";
import { UserContext } from "../contexts/UserContext";
import Home from "../pages/Home";

export default function Routes() {
  // States or Contexts
  const {findUser} = useContext(UserContext);

  // Aplication
  return (
      findUser ? <AppRoutes/> : <Home />
  )
}