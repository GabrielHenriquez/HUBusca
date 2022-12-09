import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './src/routes';

import Home from './src/pages/Home';
import Result from './src/pages/Result';
import Profile from './src/pages/Profile';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor='#242937' barStyle='light-content' translucent={false} />
      <Routes />
    </NavigationContainer>
  );
}

