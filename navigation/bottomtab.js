import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home-screen';
import AccountScreen from '../screens/account-screen';
import TrendingScreen from '../screens/trending-screen';
import EventScreen from '../screens/event-screen';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

export const HomeTab = () => {
  return (
    <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home-circle' : 'home-circle-outline';
        } 
        else if (route.name === 'Trending') {
          iconName = focused ? 'fire-circle' : 'fire';
        }
        else if (route.name === 'Account') {
          iconName = focused ? 'account-circle' : 'account-circle-outline';  
        }

        // Component Return
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#4271C6',
      tabBarInactiveTintColor: 'gray',
    })}
    
    >
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Trending" component={TrendingScreen}/>
      <Tab.Screen name="Account" component={AccountScreen}/>
      {/* <Tab.Screen name="Event" component={EventScreen}/> */}
    </Tab.Navigator>
  );
}
