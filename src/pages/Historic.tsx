import React from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import {
  Main,
  Content,
  TitleLogo,
  CaracteresWhite,
  Title,
  ContentUsers,
  ProfileImage,
  Name,
  User,
  AreaLocation,
  IconMap,
  Location,
  Line
} from "../styles/Historic";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

export default function Historic() {
  // States or Contexts 
  const users = [
    {
      avatar_url: 'https://avatars.githubusercontent.com/u/95993363?v=4',
      name: 'Gabriel Henrique',
      login: 'GabrielHenriquez',
      location: 'Recife-PE'
    },
    {
      avatar_url: 'https://avatars.githubusercontent.com/u/95993363?v=4',
      name: 'Gabriel Henrique',
      login: 'GabrielHenriquez',
      location: 'Recife-PE'
    },
    {
      avatar_url: 'https://avatars.githubusercontent.com/u/95993363?v=4',
      name: 'Gabriel Henrique',
      login: 'GabrielHenriquez',
      location: 'Recife-PE'
    },
  ];

  const navigation = useNavigation<NativeStackNavigationProp>()

  // Aplication
  return (
    <ScrollView style={{ backgroundColor: '#242937' }}>
      <Main>
        <Content>
          <TitleLogo>HUB<CaracteresWhite>usca</CaracteresWhite></TitleLogo>
          <Title>Usuários pesquisados</Title>

          {users.length > 0 && users.map((user) => (
            <ContentUsers>
              <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
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

            </ContentUsers>
          ))}

        </Content>
      </Main>
    </ScrollView>
  )
}