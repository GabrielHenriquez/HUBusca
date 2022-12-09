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
            <AreaRepositorie key={repo.name}>
              <TitleRepositorie
                onPress={() => {
                  Linking.openURL(`${repo.html_url}`);
                }}>
                {repo.name}
              </TitleRepositorie>

              <Description>{repo.description ? repo.description : 'Sem descrição'}</Description>

              <AreaLanguage>
                <Circle />
                <Language>{repo.language ? repo.language : 'Sem linguagem'}</Language>
              </AreaLanguage>

              <Date>Criado em {repo.created_at ? repo.created_at : '--/--/----'}</Date>
              <Date>Último push em {repo.pushed_at ? repo.pushed_at : '--/--/----'}</Date>
            </AreaRepositorie>
          ))}


        </Content>
      </Main>
    </ScrollView >


  )
}