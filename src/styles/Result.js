import styled from 'styled-components/native';

export const Main = styled.View`
  background-color: #242937;
  justify-content: center;
  align-items: center; 
  height: 100%;
`;

export const TituloLogo = styled.Text`
  color: #6190C8;
  font-size: 60px;
  font-weight: bold;
  font-style: italic;
  margin-bottom: 50px;
  letter-spacing: -1px;
`;

export const CaracteresWhite = styled.Text`
  color: #FFF !important;
`;

export const ProfileImage = styled.Image`
  width: 240px;
  height: 240px;
  border: 7px solid #6A98CE;
  border-radius: 300px;
  margin-bottom: 40px;
`;

export const Name = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #FFF;
  margin-bottom: 13px;
`;

export const User = styled.Text`
  font-size: 20px;
  opacity: 0.7;
  color: #FFF;
  margin-bottom: 13px;
`;

export const AreaLocation = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
`;

export const Location = styled.Text`
  font-size: 18px;
  color: #FFF;
`;

export const IconMap = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

