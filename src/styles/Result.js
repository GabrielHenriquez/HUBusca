import styled from 'styled-components/native';

export const Main = styled.View`
  background-color: #242937;
  justify-content: center;
  align-items: center; 
  height: 100%;
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
  margin-bottom: 15px;
`;

export const User = styled.Text`
  font-size: 20px;
  opacity: 0.7;
  color: #FFF;
  margin-bottom: 15px;
`;

export const AreaLocation = styled.View`
  display: flex;
  flex-direction: row;
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

