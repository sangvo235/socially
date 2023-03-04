import { NavigationContainer } from '@react-navigation/native';
import { HomeTab } from './navigation/bottomtab';

export default function App() {

  return (
    <NavigationContainer>
      <HomeTab />
    </NavigationContainer>
  );
}