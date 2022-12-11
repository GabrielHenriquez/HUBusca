import React, { useState, useContext } from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import * as Animatable from "react-native-animatable";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import {
  Main,
  InputUsuario,
  CaracteresWhite,
  Label,
  ButtonBuscar,
  TextButton,
  ButtonHistorico,
  ErrorMessage,
  ScreenLoading,
} from "./styles";

import { RootStackParamList } from "../../routes/app.routes";

import { UserContext } from "../../contexts/UserContext";

import api from "../../services/api";

export function Home() {
  // States or Contexts
  const [userInput, setUserInput] = useState<string>("");
  const [textEmpty, setTextEmpty] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const { getUser, getRepositories } = useContext(UserContext);

  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // Functions
  async function handleUser() {
    if (userInput === "") {
      setTextEmpty(true);
      return;
    }

    setLoading(true);

    api
      .get(`/users/${userInput}`)
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
        navigation.navigate("Result");

        setUserInput("");
        setTextEmpty(false);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error users", error);
        if (error.response.status === 404) {
          alert("Usuário não encontrado");

          setUserInput("");
          setTextEmpty(false);
          setLoading(false);
        }
        if (error.response.status === 500) alert("Erro ao fazer a requisição");
      });

    api
      .get(`/users/${userInput}/repos`)
      .then(async (response) => {
        const res = response.data;
        await getRepositories(res);
      })
      .catch((error) => {
        alert("Limite de requisição excedido.");
        setTextEmpty(false);
        setLoading(false);
      });
  }

  async function handleUserHistoric() {
    setLoading(true);
    navigation.navigate("Historic");
    setTextEmpty(false);
    setLoading(false);
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
          <Animatable.Text
            animation="fadeInLeft"
            delay={650}
            style={style.TitleLogo}
          >
            HUB<CaracteresWhite>usca</CaracteresWhite>
          </Animatable.Text>

          <Animatable.View animation="fadeInUp" delay={900}>
            <Label>Digite o nome de úsuario</Label>

            <InputUsuario
              placeholder="Ex.: GabrielHenriquez"
              placeholderTextColor="#3B72B2"
              onChangeText={setUserInput}
              value={userInput.trim()}
            />

            {textEmpty && (
              <ErrorMessage>
                Digite um usuário para realizar a pesquisa!
              </ErrorMessage>
            )}

            <ButtonBuscar onPress={() => handleUser()}>
              <TextButton>Pesquisar</TextButton>
            </ButtonBuscar>

            <ButtonHistorico onPress={() => handleUserHistoric()}>
              <TextButton>Histórico</TextButton>
            </ButtonHistorico>
          </Animatable.View>
        </Main>
      )}
    </Main>
  );
}

const style = StyleSheet.create({
  TitleLogo: {
    color: "#6190C8",
    fontSize: 62,
    fontWeight: "bold",
    marginBottom: 50,
    letterSpacing: -1,
  },
  AreaInputs: {
    width: 300,
  },
});
