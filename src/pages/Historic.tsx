import React, { useContext } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
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
  TextResultHistoric
} from "../styles/Historic";

import { UserContext } from "../contexts/UserContext";

import { useNavigation, useScrollToTop } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import api from "../services/api";

export default function Historic() {
  // States or Contexts 
  const { getUser, getRepositories, users } = useContext(UserContext)
  const usersReverse = users.reverse()

  const navigation = useNavigation<NativeStackNavigationProp>()

  // Functions
  const getInformationUser = (user: string) => {
    api.get(`/users/${user}`)
      .then(async (response) => {
        const { avatar_url, name, login, location, id, followers, following, public_repos } = response.data
        await getUser({ avatar_url, name, login, location, id, followers, following, public_repos })
        navigation.navigate('Profile')
      })
      .catch((error) => {
        console.log('Error users', error)
        if (error.response.status === 404) {
          alert('Usuário não encontrado')
        }
        if (error.response.status === 500) alert('Erro ao fazer a requisição')
      })

    api.get(`/users/${user}/repos`)
      .then(async (response) => {
        const res = response.data
        await getRepositories(res)
      })
      .catch((error) => console.log('ERROR Repositories', error))
  };

  // Aplication
  return (
    <ScrollView style={{ backgroundColor: '#242937' }}>
      <Main>
        <Content>
          <TitleLogo>HUB<CaracteresWhite>usca</CaracteresWhite></TitleLogo>
          <Title>Usuários pesquisados</Title>

          {usersReverse.length > 0 && usersReverse.map((user) => (
            <ContentUsers>
              <TouchableOpacity onPress={() => getInformationUser(user.login)}>
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

          {users.length === 0 && (
            <TextResultHistoric>Nada encontrado :(</TextResultHistoric>
          )}

        </Content>
      </Main>
    </ScrollView>
  )
}