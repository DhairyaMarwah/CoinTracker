import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './src/screens/SplashScreen';
import CoinTableScreen from './src/screens/CoinTableScreen';
import CoinChartScreen from './src/screens/CoinChartScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1A1A1A', // Dark background color for the header
          },
          headerTintColor: '#EFEFEF', // Light text color for the header
        }}
      >
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }} // Hide the header for the SplashScreen
        />
        <Stack.Screen name="CoinTable" component={CoinTableScreen} />
        <Stack.Screen name="CoinChart" component={CoinChartScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
