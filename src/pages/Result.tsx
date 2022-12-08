import React from "react";
import {
  Main,
  ProfileImage,
  Name,
  User,
  AreaLocation,
  Location,
  IconMap
} from "../styles/Result";

export default function Result() {
  return (
    <Main>

      <ProfileImage
        source={{
          uri: 'https://avatars.githubusercontent.com/u/95993363?v=4',
        }}
      />

      <Name>Gabriel Henrique</Name>
      <User>GabrielHenriqueZ</User>

      <AreaLocation>
        <IconMap source={require('../../assets/mapa.png')} />
        <Location>Recife-PE</Location>
      </AreaLocation>


    </Main>
  )
}