import styled from 'styled-components/native';

export const Main = styled.View`
  background-color: #242937;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.View`
  justify-content: center;
  align-items: center; 
  width: 320px;
  height: 100%;
`;

export const CaracteresWhite = styled.Text`
  color: #FFF !important;
`;

export const ButtonProfile = styled.TouchableOpacity`
  width: 100%;
`;

export const AreaInformations = styled.View`
    justify-content: center;
    margin-left: 10px;
`;

export const ProfileImage = styled.Image`
  width: 76px;
  height: 76px;
  border: 4px solid #53a9d7;
  border-radius: 300px;
`;

export const Name = styled.Text`
  color: #FFF !important;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 3px;
`;

export const User = styled.Text`
  color: #FFF !important;
  font-size: 16px;
  opacity: 0.7;
  margin-bottom: 3px;
`;

export const AreaLocation = styled.View`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-bottom: 7px;
`;

export const IconMap = styled.Image`
  width: 18px;
  height: 18px;
  margin-right: 10px;
`;

export const Location = styled.Text`
  color: #FFF !important;
  font-size: 15px;
  opacity: 0.9;
`;

export const AreaUsers = styled.View`
  width: 100%;
  margin-bottom: 65px;
`;