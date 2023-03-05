import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home-screen';
import AccountScreen from '../screens/account-screen';
import TrendingScreen from '../screens/trending-screen';
import EventScreen from '../screens/event-screen';
import { HomeTab } from './bottomtab';

const Stack = createBottomTabNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      <Stack.Screen name="Trending" component={HomeTab}/>
      {/* <Stack.Screen name="Account" component={AccountScreen}/>
      <Stack.Screen name="Event" component={EventScreen}/> */}
    </Stack.Navigator>
  );
}
