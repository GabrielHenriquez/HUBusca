import React, {useState} from "react";
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

import api from "../services/api";

export default function Home() {

  // States
  const [user, setUser] = useState('');
  const [userInput, setUserInput] = useState('');

  // Functions
  const getUser = () => {
    api.get(`/users/${userInput}`)
      .then((response) => setUser(response.data))
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
          placeholderTextColor='#6190C8'
          id='userInput'
          onChangeText={setUserInput}
          value={userInput}
        />

        <ButtonBuscar onPress={() => getUser()}>
          <TextButton>Buscar</TextButton>
        </ButtonBuscar>

        <ButtonHistorico>
          <TextButton>Histórico</TextButton>
        </ButtonHistorico>
      </AreaInputs>

    </Main>
  )
}