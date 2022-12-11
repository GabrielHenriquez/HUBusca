import React, { useContext, useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../routes/app.routes";
import * as Animatable from "react-native-animatable";

import {
  CaracteresWhite,
  Main,
  ProfileImage,
  Name,
  User,
  AreaLocation,
  Location,
  IconMap,
  ScreenLoading,
} from "./styles";

import { UserContext } from "../../contexts/UserContext";

export function Result() {
  // States or Contexts
  const { user } = useContext(UserContext);
  const [loading, setLoading] = useState<boolean>();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  //Functions
  const handleProfile = () => {
    setLoading(true);
    navigation.navigate("Profile");
    setLoading(false);
  };

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
            delay={600}
            style={style.TitleLogo}
          >
            HUB<CaracteresWhite>usca</CaracteresWhite>
          </Animatable.Text>

          <Animatable.View
            animation="fadeInUp"
            delay={900}
            style={style.AreaInformation}
          >
            <TouchableOpacity onPress={() => handleProfile()}>
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
          </Animatable.View>
        </Main>
      )}
    </Main>
  );
}

const style = StyleSheet.create({
  TitleLogo: {
    color: "#53a9d7",
    fontSize: 62,
    fontWeight: "bold",
    marginBottom: 50,
    letterSpacing: -1,
  },
  AreaInformation: {
    display: "flex",
    alignItems: "center",
  },
});
