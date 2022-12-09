import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import {
  AreaButton,
  ButtonBack,
  TextButton,
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
import { TouchableOpacity } from "react-native";

export default function Result() {

  // States or Contexts
  const { user } = useContext(UserContext)
  const navigation = useNavigation<NativeStackNavigationProp>()

  // Aplication
  return (
    <Main>
      <TituloLogo>HUB<CaracteresWhite>usca</CaracteresWhite></TituloLogo>

      <TouchableOpacity  onPress={() => navigation.navigate('Profile')}>
        <ProfileImage
          source={{
            uri: `${user.avatar_url}.`,
          }} />
      </TouchableOpacity>


      <Name>{user.name ? user.name : 'Nome vazio'}</Name>
      <User>{user.login}</User>

      <AreaLocation>
        <IconMap source={require('../../assets/mapa.png')} />
        <Location>{user.location ? user.location : 'Sem localização'}</Location>
      </AreaLocation>
    </Main>
  )
}