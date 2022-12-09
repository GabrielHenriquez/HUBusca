import React, {useContext} from "react";
import {
  TituloLogo,
  CaracteresWhite,
  Main,
  ProfileImage,
  Name,
  User,
  AreaLocation,
  Location,
  IconMap
} from "../styles/Result";

import { UserContext } from "../contexts/UserContext";

export default function Result() {

  // States or Contexts
  const {user} = useContext(UserContext)

  return (
    <Main>
      <TituloLogo>HUB<CaracteresWhite>usca</CaracteresWhite></TituloLogo>

      <ProfileImage
        source={{
          uri: `${user.avatar_url}.`,
        }}
      />

      <Name>{user.name}</Name>
      <User>{user.login}</User>

      <AreaLocation>
        <IconMap source={require('../../assets/mapa.png')} />
        <Location>{user.location}</Location>
      </AreaLocation>
    </Main>
  )
}