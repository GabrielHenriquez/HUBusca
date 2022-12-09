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
} from "../styles/Home";

import { UserContext } from "../contexts/UserContext";

import api from "../services/api";

export default function Home() {

  // States
  const [userInput, setUserInput] = useState('');
  const { getUser, getRepositories } = useContext(UserContext);

  // Functions
  async function handleUser() {
    if (userInput === '') return

    api.get(`/users/${userInput}`)
      .then(async (response) => {
        const { avatar_url, name, login, location, id, followers, following, public_repos } = response.data
        await getUser({ avatar_url, name, login, location, id, followers, following, public_repos })
      })
      .catch((error) => console.log('ERRO OCORRIDO', error))

    api.get(`/users/${userInput}/repos`)
      .then(async (response) => {
        const res = response.data
        await getRepositories(res)
      })
      .catch((error) => console.log('ERRO OCORRIDO', error))
  };

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
          value={userInput}
        />

        <ButtonBuscar onPress={() => handleUser()}>
          <TextButton>Buscar</TextButton>
        </ButtonBuscar>

        <ButtonHistorico>
          <TextButton>Histórico</TextButton>
        </ButtonHistorico>
      </AreaInputs>
    </Main>
  )
}