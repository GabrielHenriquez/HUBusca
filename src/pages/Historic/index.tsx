import React, { useContext, useEffect, useState } from "react";
import { ScrollView, StyleSheet } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";

import {
  Main,
  Content,
  CaracteresWhite,
  ButtonProfile,
  AreaInformations,
  ProfileImage,
  Name,
  User,
  AreaLocation,
  IconMap,
  Location,
  AreaUsers
} from "./styles";

import { UserContext } from "../../contexts/UserContext";

import { RootStackParamList } from "../../routes/app.routes";

import { UsersProps } from "../../contexts/UserContext";

import api from "../../services/api";

export function Historic() {
  // States or Contexts
  const { getUser, getRepositories } = useContext(UserContext);
  const [users, setUsers] = useState<UsersProps[]>([]);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // Functions
  const getInformationUser = async (user?: string) => {
    api
      .get(`/users/${user}`)
      .then(async (response) => {
        const {
          avatar_url,
          name,
          login,
          location,
          id,
          followers,
          following,
          public_repos,
        } = response.data;
        await getUser({
          avatar_url,
          name,
          login,
          location,
          id,
          followers,
          following,
          public_repos,
        });
        navigation.navigate("Profile");
      })
      .catch((error) => {
        console.log("Error users", error);
        if (error.response.status === 404) {
          alert("Usuário não encontrado");
        }
        if (error.response.status === 500) alert("Erro ao fazer a requisição");
      });

    api
      .get(`/users/${user}/repos`)
      .then(async (response) => {
        const res = response.data;
        await getRepositories(res);
      })
      .catch((error) => {
        if (error.response.status === 500) alert("Erro ao fazer a requisição");
      });
  };

  const getUsers = async () => {
    const jsonValue = (await AsyncStorage.getItem("@users")) || "[]";
    const arrUsers = JSON.parse(jsonValue);

    if (arrUsers === null || arrUsers.length === 0) return;
    arrUsers.reverse();
    setUsers(arrUsers);
  };

  useEffect(() => {
    getUsers();
  }, []);

  // Aplication
  return (
    <ScrollView style={{ backgroundColor: "#242937" }}>
      <Main>
        <Content>
          <Animatable.Text
            animation="fadeInLeft"
            delay={500}
            style={style.TitleLogo}
          >
            HUB<CaracteresWhite>usca</CaracteresWhite>
          </Animatable.Text>

          <Animatable.Text
            animation="fadeInLeft"
            delay={600}
            style={style.Title}
          >
            Usuários pesquisados
          </Animatable.Text>

          <AreaUsers>
            {users.length > 0 &&
              users.map((user) => (
                <ButtonProfile
                  key={user.login}
                  onPress={() => getInformationUser(user.login)}
                >
                  <Animatable.View
                    animation="fadeInUp"
                    delay={900}
                    style={style.ContentUsers}
                  >
                    <ProfileImage
                      source={{
                        uri: `${user.avatar_url}.`,
                      }}
                    />

                    <AreaInformations>
                      <Name>{user.name ? user.name : "Nome vazio"}</Name>

                      <User>{user.login}</User>

                      <AreaLocation>
                        <IconMap source={require("../../../assets/mapa.png")} />
                        <Location>
                          {user.location ? user.location : "Sem localização"}
                        </Location>
                      </AreaLocation>
                    </AreaInformations>
                  </Animatable.View>
                </ButtonProfile>
              ))}
          </AreaUsers>

          {users.length === (0 as number) && (
            <Animatable.Text
              animation="fadeInUp"
              delay={900}
              style={style.TextResultHistoric}
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
  Title: {
    color: "#8CDBFF",
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
  },
  ContentUsers: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    borderRadius: 15,
    backgroundColor: "#224467",
    marginBottom: 15,
    padding: 10,
  },
  TextResultHistoric: {
    fontSize: 27,
    color: "#CCC",
    marginTop: 140,
    marginBottom: 95,
  },
});
