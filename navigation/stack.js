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
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Trending" component={TrendingScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Events" component={EventScreen} options={{headerShown: false}}/>
      <Stack.Screen name="Account" component={AccountScreen} options={{headerShown: false}}/>
    </Stack.Navigator>
  );
}
