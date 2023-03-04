import { NavigationContainer } from '@react-navigation/native';
import { HomeTab } from './navigation/bottomtab';
import { HomeStack } from './navigation/stack';

export default function App() {

  return (
    <NavigationContainer>
      <HomeTab />
    </NavigationContainer>
  );
}