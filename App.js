import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeNavigator from './src/navigator/HomeNavigator';
import GraphsScreen from './src/screens/GraphsScreen';
import InformationScreen from './src/screens/InformationScreen';
import WaterScreen from './src/screens/WaterScreen';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'HomeNavigator') {
              iconName = 'home-filled'
            } else if (route.name === 'Graphs') {
              iconName = focused ? 'insert-chart' : 'insert-chart-outlined';
            } else if (route.name === 'Information') {
              iconName = 'waves';
            } else if (route.name === 'Water') {
              iconName = 'collections';
            }
            return <Icon name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#2380FB',
          tabBarInactiveTintColor: '#101010',
          tabBarShowLabel: false,
          headerShown: false,
        })}
      >
        <Tab.Screen name='HomeNavigator' component={HomeNavigator} />
        <Tab.Screen name='Graphs' component={GraphsScreen} />
        <Tab.Screen name='Information' component={InformationScreen} />
        <Tab.Screen name='Water' component={WaterScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App