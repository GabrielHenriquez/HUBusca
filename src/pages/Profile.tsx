import React from "react";
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

export default function Profile() {
  return (

    <ScrollView>
      <Main>
        <Content>
          <TitleLogo>HUB<CaracteresWhite>usca</CaracteresWhite></TitleLogo>

          <ProfileImage
            source={{
              uri: 'https://avatars.githubusercontent.com/u/95993363?v=4',
            }}
          />

          <Name>Gabriel Henrique</Name>

          <User>GabrielHenriquez</User>

          <AreaLocation>
            <IconMap source={require('../../assets/mapa.png')} />
            <Location>Recife-PE</Location>
          </AreaLocation>

          <ID>ID: 2718848</ID>

          <AreaNetwork>
            <IconUsers source={require('../../assets/group.png')} />
            <Network>840 seguidores / 445 seguindo</Network>
          </AreaNetwork>

          <Repositories>75 Repositórios públicos</Repositories>

          <Line />

          <TitleAreaRepositories>Repositórios</TitleAreaRepositories>

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

          <AreaRepositorie>
            <TitleRepositorie>React Map</TitleRepositorie>

            <Description>
              Aplicação simples de resumos sobre filmes
              e que pode salvar localmente os filmes favoritos
              para praticar consumo de API e praticar o JavaScript,
              os filmes favoritos,  os filmes favoritos,  os filmes favoritos.
              Aplicação simples de resumos sobre filmes
              e que pode salvar localmente os filmes favoritos
              para praticar consumo de API e praticar o JavaScript,
              os filmes favoritos,  os filmes favoritos,  os filmes favoritos.
            </Description>

            <AreaLanguage>
              <Circle />
              <Language>JavaScript</Language>
            </AreaLanguage>

            <Date>Criado em 20/05/2022</Date>
            <Date>Último push em 23/05/2022</Date>
          </AreaRepositorie>

          <AreaRepositorie>
            <TitleRepositorie>app-movie-react</TitleRepositorie>

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