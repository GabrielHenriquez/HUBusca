import React, { Context, ContextType, useContext, useState } from "react";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import {
  TituloLogo,
  CaracteresWhite,
  Main,
  ProfileImage,
  Name,
  User,
  AreaLocation,
  Location,
  IconMap,
  ScreenLoading
} from "../styles/Result";

import { UserContext } from "../contexts/UserContext";
import { TouchableOpacity } from "react-native";

export default function Result() {
  // States or Contexts
  const { user } = useContext(UserContext)
  const [loading, setLoading] = useState<boolean>()
  const navigation = useNavigation<NativeStackNavigationProp>()

  //Functions
  const handleProfile = () => {
    setLoading(true)
    navigation.navigate('Profile')
    setLoading(false)
  }

  // Aplication
  return (
    <Main>
      {loading ? (
        <ScreenLoading>
          <ActivityIndicator size={60} color="#FFF" />
        </ScreenLoading>
      ) : (
        <Main>
          <TituloLogo>HUB<CaracteresWhite>usca</CaracteresWhite></TituloLogo>

          <TouchableOpacity onPress={() => handleProfile()}>
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
      )}
    </Main>
  )
}