import React from "react";
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

export default function Home() {
  return (
    <Main>

      <TituloLogo>HUB<CaracteresWhite>usca</CaracteresWhite></TituloLogo>

      <AreaInputs>
        <Label>Digite o nome de úsuario</Label>

        <InputUsuario
          placeholder='Ex.: GabrielHenriquez'
          placeholderTextColor='#6190C8'
          id='userInput'
        />

        <ButtonBuscar>
          <TextButton>Buscar</TextButton>
        </ButtonBuscar>

        <ButtonHistorico>
          <TextButton>Histórico</TextButton>
        </ButtonHistorico>
      </AreaInputs>

    </Main>
  )
}