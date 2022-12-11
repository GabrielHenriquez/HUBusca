import React, { useContext } from "react";
import { ScrollView, Linking, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import {
  Main,
  Content,
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
  TitleRepositorie,
  Description,
  AreaLanguage,
  Circle,
  Language,
  Date,
} from "./styles";

import { UserContext } from "../../contexts/UserContext";

export function Profile() {
  // States or Contexts
  const { user, repository } = useContext(UserContext);

  // Functions
  const getColor = (language: string) => {
    if (language === null) return { backgroundColor: "#ffffff" };
    if (language === "TypeScript") return { backgroundColor: "#3d97f8" };
    if (language === "JavaScript") return { backgroundColor: "#f1e05a" };
    if (language === "Java") return { backgroundColor: "#b07219" };
    if (language === "HTML") return { backgroundColor: "#e34c26" };
    if (language === "Python") return { backgroundColor: "#3634c5" };
    if (language === "Vue") return { backgroundColor: "#47c58c" };
    if (language === "Dart") return { backgroundColor: "#09c4ba" };
    if (language === "C#") return { backgroundColor: "#178600" };
    if (language === "CSS") return { backgroundColor: "#815db6" };
    if (language === "PHP") return { backgroundColor: "#5a69a5" };
    if (language === "Go") return { backgroundColor: "#8d1748" };
    if (language === "C++") return { backgroundColor: "#0cf351" };
    if (language === "Shell") return { backgroundColor: "#251047" };
    if (language === "C") return { backgroundColor: "#c441c9" };
    if (language === "Ruby") return { backgroundColor: "#7fb12f" };
  };

  // Aplication
  return (
    <ScrollView style={{ backgroundColor: "#242937" }}>
      <Main>
        <Content>
          <Animatable.Text
            animation="fadeInLeft"
            delay={490}
            style={style.TitleLogo}
          >
            HUB<CaracteresWhite>usca</CaracteresWhite>
          </Animatable.Text>

          <Animatable.Image
            animation="fadeInLeft"
            delay={650}
            style={style.ProfileImage}
            source={{
              uri: `${user.avatar_url}`,
            }}
          />

          <Animatable.View
            animation="fadeInLeft"
            delay={720}
            style={style.AreaInformations}
          >
            <Name>{user.name ? user.name : "Nome vazio"}</Name>

            <User>{user.login}</User>

            <AreaLocation>
              <IconMap source={require("../../../assets/mapa.png")} />
              <Location>
                {user.location ? user.location : "Sem localização"}
              </Location>
            </AreaLocation>

            <ID>ID: {user.id}</ID>

            <AreaNetwork>
              <IconUsers source={require("../../../assets/group.png")} />
              <Network>
                {user.following} seguidores / {user.following} seguindo
              </Network>
            </AreaNetwork>

            <Repositories>
              {user.public_repos} Repositórios públicos
            </Repositories>
          </Animatable.View>

          <Animatable.View
            animation="fadeInLeft"
            delay={790}
            style={style.Line}
          />

          <Animatable.Text
            animation="fadeInUp"
            delay={900}
            style={style.TitleAreaRepositories}
          >
            Repositórios
          </Animatable.Text>

          {repository &&
            repository.map((repo) => (
              <Animatable.View
                animation="fadeInUp"
                delay={900}
                style={style.AreaRepositorie}
                key={repo.name}
              >
                <TitleRepositorie
                  onPress={() => {
                    Linking.openURL(`${repo.html_url}`);
                  }}
                >
                  {repo.name}
                </TitleRepositorie>

                <Description>
                  {repo.description ? repo.description : "Sem descrição"}
                </Description>

                <AreaLanguage>
                  <Circle style={getColor(repo.language)} />
                  <Language>
                    {repo.language ? repo.language : "Sem linguagem"}
                  </Language>
                </AreaLanguage>

                <Date>
                  Criado em {repo.created_at ? repo.created_at : "--/--/----"}
                </Date>
                <Date>
                  Último push em{" "}
                  {repo.pushed_at ? repo.pushed_at : "--/--/----"}
                </Date>
              </Animatable.View>
            ))}

          {repository.length === (0 as number) && (
            <Animatable.Text
              animation="fadeInUp"
              delay={900}
              style={style.TextResultRepository}
            >
              Nada encontrado :(
            </Animatable.Text>
          )}
        </Content>
      </Main>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  TitleLogo: {
    color: "#6190C8",
    fontSize: 37,
    fontWeight: "bold",
    marginTop: 37,
    marginBottom: 35,
    letterSpacing: -1,
  },
  ProfileImage: {
    width: 87,
    height: 87,
    borderColor: "#7dbfe4",
    borderWidth: 4,
    borderStyle: "solid",
    borderRadius: 300,
    marginBottom: 15,
  },
  TitleAreaRepositories: {
    color: "#8CD6FF",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },
  AreaInformations: {
    display: "flex",
    alignItems: "center",
  },
  Line: {
    backgroundColor: "#FFF",
    width: "100%",
    height: 4,
    marginTop: 30,
    marginBottom: 25,
  },
  AreaRepositorie: {
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#2B5C82",
    padding: 10,
    marginBottom: 25,
  },
  TextResultRepository: {
    fontSize: 22,
    color: "#CCC",
    marginTop: 30,
    marginBottom: 45,
  },
});
