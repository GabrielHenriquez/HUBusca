import React, { useContext } from "react";
import { ScrollView, Linking } from "react-native";
import {
  Main,
  Content,
  TitleLogo,
  ProfileImage,
  CaracteresWhite,
  Name,
  User,
  AreaLocation,
  IconMap,
  Location,
  ID,
  AreaNetwork,
  IconUsers,
  Network,
  Repositories,
  Line,
  TitleAreaRepositories,
  AreaRepositorie,
  TitleRepositorie,
  Description,
  AreaLanguage,
  Circle,
  Language,
  Date

} from "../styles/Profile";

import { UserContext } from "../contexts/UserContext";

export default function Profile() {

  // States or Contexts
  const { user, repository } = useContext(UserContext)

  // Aplication
  return (
    <ScrollView style={{ backgroundColor: '#242937' }}>
      <Main>
        <Content>
          <TitleLogo>HUB<CaracteresWhite>usca</CaracteresWhite></TitleLogo>

          <ProfileImage
            source={{
              uri: `${user.avatar_url}`,
            }}
          />

          <Name>{user.name}</Name>

          <User>{user.login}</User>

          <AreaLocation>
            <IconMap source={require('../../assets/mapa.png')} />
            <Location>{user.location ? user.location : 'Sem localização'}</Location>
          </AreaLocation>

          <ID>ID: {user.id}</ID>

          <AreaNetwork>
            <IconUsers source={require('../../assets/group.png')} />
            <Network>{user.following} seguidores / {user.following} seguindo</Network>
          </AreaNetwork>

          <Repositories>{user.public_repos} Repositórios públicos</Repositories>

          <Line />

          <TitleAreaRepositories>Repositórios</TitleAreaRepositories>

          {repository && repository.map(repo => (
            console.log(repo.name)
          ))}

          <AreaRepositorie>
            <TitleRepositorie
              onPress={() => {
                Linking.openURL('https://www.google.com.br');
              }}>
              app - movie - react
            </TitleRepositorie>

            <Description>
              Aplicação simples de resumos sobre filmes
              e que pode salvar localmente os filmes favoritos
              para praticar consumo de API e praticar o JavaScript.
            </Description>

            <AreaLanguage>
              <Circle />
              <Language>JavaScript</Language>
            </AreaLanguage>

            <Date>Criado em 20/05/2022</Date>
            <Date>Último push em 23/05/2022</Date>
          </AreaRepositorie>

        </Content>
      </Main>
    </ScrollView >


  )
}