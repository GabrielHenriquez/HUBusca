import React, { useState, useContext } from "react";
import {
  Main,
  AreaInputs,
  InputUsuario,
  TituloLogo,
  CaracteresWhite,
  Label,
  ButtonBuscar,
  TextButton,
  ButtonHistorico,
  ErrorMessage
} from "../styles/Home";

import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { UserContext } from "../contexts/UserContext";

import api from "../services/api";

export default function Home() {

  // States or Contexts
  const [userInput, setUserInput] = useState<string>('');
  const [textEmpty, setTextEmpty] = useState<boolean>(false)

  const { getUser, getRepositories, users } = useContext(UserContext);

  const navigation = useNavigation<NativeStackNavigationProp>()

  // Functions
  async function handleUser() {
    if (userInput === '') {
      setTextEmpty(true)
      return
    }

    api.get(`/users/${userInput}`)
      .then(async (response) => {
        const { avatar_url, name, login, location, id, followers, following, public_repos } = response.data
        await getUser({ avatar_url, name, login, location, id, followers, following, public_repos })
        navigation.navigate('Result')
        setUserInput('')
        setTextEmpty(false)
      })
      .catch((error) => {
        console.log('Error users', error)
        if (error.response.status === 404) {
          alert('Usuário não encontrado')
          setUserInput('')
        }
        if (error.response.status === 500) alert('Erro ao fazer a requisição')
      })

    api.get(`/users/${userInput}/repos`)
      .then(async (response) => {
        const res = response.data
        await getRepositories(res)
      })
      .catch((error) => console.log('ERROR Repositories', error))
  };

  async function handleUserHistoric() {
    navigation.navigate('Historic')
  }

  // Aplication
  return (
    <Main>
      <TituloLogo>HUB<CaracteresWhite>usca</CaracteresWhite></TituloLogo>

      <AreaInputs>
        <Label>Digite o nome de úsuario</Label>

        <InputUsuario
          placeholder='Ex.: GabrielHenriquez'
          placeholderTextColor='#3B72B2'
          id='userInput'
          onChangeText={setUserInput}
          value={userInput.trim()}
        />

        {textEmpty && (
          <ErrorMessage>Digite um usuário para realizar a pesquisa!</ErrorMessage>
        )}

        <ButtonBuscar onPress={() => handleUser()}>
          <TextButton>Pesquisar</TextButton>
        </ButtonBuscar>

        <ButtonHistorico onPress={() => handleUserHistoric()}>
          <TextButton>Histórico</TextButton>
        </ButtonHistorico>
      </AreaInputs>
    </Main>
  )
}