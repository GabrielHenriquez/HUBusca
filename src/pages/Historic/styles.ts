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

export const TitleLogo = styled.Text`
  display: flex;
  align-self: center;
  color: #6190C8;
  font-size: 36px;
  font-weight: bold;
  margin-top: 37px;
  margin-bottom: 35px;
  letter-spacing: -1px;
`;

export const Title = styled.Text`
  color: #C2CAEB !important;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const CaracteresWhite = styled.Text`
  color: #FFF !important;
`;

export const ContentUsers = styled.View`
  border-radius: 15px;
  background-color: #224467;
  justify-content: center;
  align-items: center; 
  width: 100%;
  margin-bottom: 15px;
  padding: 12px;
`;

export const ProfileImage = styled.Image`
  width: 72px;
  height: 72px;
  border: 4px solid #6A98CE;
  border-radius: 300px;
  margin-bottom: 12px;
`;

export const Name = styled.Text`
  color: #FFF !important;
  font-size: 18px;
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
  font-size: 16px;
  opacity: 0.9;
`;

export const TextResultHistoric = styled.Text`
  font-size: 27px;
  color: #CCC;
  margin-top: 140px;
`;