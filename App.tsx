import { Text, View, StatusBar } from 'react-native';
import { Main } from '../HUBusca/src/styles/App'

import Routes from './src/routes';

import Home from './src/pages/Home';
import Result from './src/pages/Result';
import Profile from './src/pages/Profile';

export default function App() {
  return (
    <>
      <StatusBar backgroundColor='#242937' barStyle='light-content' translucent={false} />
      <Profile />
    </>
  );
}

