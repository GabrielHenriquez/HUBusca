import React, { useContext, useEffect, useState } from "react";
import { ScrollView, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
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
  TextResultHistoric,
} from "./styles";

import { UserContext } from "../../contexts/UserContext";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";

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
      })
  };

  const getUsers = async () => {
    const jsonValue = await AsyncStorage.getItem("@users");
    const arrUsers = JSON.parse(jsonValue);

    console.log('Users AsyncStorage:', arrUsers)

    if(arrUsers === null) return
    arrUsers.reverse()
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
          <TitleLogo>
            HUB<CaracteresWhite>usca</CaracteresWhite>
          </TitleLogo>
          <Title>Usuários pesquisados</Title>

          {users.length > 0 &&
            users.map((user) => (
              <ContentUsers>
                <TouchableOpacity
                  onPress={() => getInformationUser(user.login)}
                >
                  <ProfileImage
                    source={{
                      uri: `${user.avatar_url}.`,
                    }}
                  />
                </TouchableOpacity>

                <Name>{user.name ? user.name : "Nome vazio"}</Name>

                <User>{user.login}</User>

                <AreaLocation>
                  <IconMap source={require("../../../assets/mapa.png")} />
                  <Location>
                    {user.location ? user.location : "Sem localização"}
                  </Location>
                </AreaLocation>
              </ContentUsers>
            ))}

          {users.length === (0 as number) && (
            <TextResultHistoric>Nada encontrado :(</TextResultHistoric>
          )}
        </Content>
      </Main>
    </ScrollView>
  );
}
