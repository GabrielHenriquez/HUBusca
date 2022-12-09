import styled from 'styled-components';

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
  align-self: flex-end;
  color: #6190C8;
  font-size: 30px;
  font-weight: bold;
  font-style: italic;
  margin-top: 35px;
  margin-bottom: 35px;
  letter-spacing: -1px;
`;

export const CaracteresWhite = styled.Text`
  color: #FFF !important;
`;

export const ProfileImage = styled.Image`
  width: 80px;
  height: 80px;
  border: 4px solid #6A98CE;
  border-radius: 300px;
  margin-bottom: 15px;
`;

export const Name = styled.Text`
  color: #FFF !important;
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 7px;
`;

export const User = styled.Text`
  color: #FFF !important;
  font-size: 18px;
  opacity: 0.7;
  margin-bottom: 7px;
`;

export const AreaLocation = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 7px;
`;

export const IconMap = styled.Image`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const Location = styled.Text`
  color: #FFF !important;
  font-size: 16px;
  opacity: 0.9;
`;

export const ID = styled.Text`
  color: #FFF !important;
  font-size: 16px;
  opacity: 0.9;
  margin-bottom: 7px;
`;

export const AreaNetwork = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 7px;
`;

export const IconUsers = styled.Image`
  width: 22px;
  height: 22px;
  margin-right: 10px;
`;

export const Network = styled.Text`
  color: #FFF !important;
  font-size: 16px;
  opacity: 0.9;
`;

export const Repositories = styled.Text`
  color: #FFF !important;
  font-size: 16px;
  opacity: 0.9;
`;

export const Line = styled.View`
  background-color: #FFF;
  width: 100%;
  height: 4px;
  margin-top: 35px;
  margin-bottom: 25px;
`;

export const TitleAreaRepositories = styled.Text`
  color: #88BCF9 !important;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const AreaRepositorie = styled.View`
  border-radius: 10px;
  background-color: #2B5C82;
  padding: 10px;
  margin-bottom: 25px;
`;

export const TitleRepositorie = styled.Text`
  color: #FFF !important;
  font-size: 21px;
  font-weight: bold;
  margin-bottom: 15px;
  text-decoration: underline;
`;

export const Description = styled.Text`
  color: #FFF !important;
  font-size: 15px;
  margin-bottom: 15px;
  opacity: 0.7;
`;

export const AreaLanguage = styled.View`
  display: flex;
  flex-direction: row;
  margin-bottom: 15px;
`;

export const Circle = styled.View`
  width: 18px;
  height: 18px;
  margin-right: 7px;
  background-color: yellow;
  border-radius: 18px;
`;

export const Language = styled.Text`
  color: #FFF !important;
  font-size: 14px;
  font-weight: bold;
`;

export const Date = styled.Text`
  color: #FFF !important;
  font-size: 14px;
  margin-bottom: 10px;
  opacity: 0.8;
`;