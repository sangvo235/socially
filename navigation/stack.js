import HomeScreen from '../screens/home-screen';
import AccountScreen from '../screens/account-screen';
import TrendingScreen from '../screens/trending-screen';
import EventScreen from '../screens/event-screen';
import { createStackNavigator } from '@react-navigation/stack';
// import { navOptions } from './nav-options';

const Stack = createStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Trending" component={TrendingScreen} />
      <Stack.Screen name="Event" component={EventScreen}/>
      <Stack.Screen name="Account" component={AccountScreen}/>
    </Stack.Navigator>
  );
}
