import React,{useState,useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './src/screens/SplashScreen';
import CoinTableScreen from './src/screens/CoinTableScreen';
import CoinChartScreen from './src/screens/CoinChartScreen'; 
 
const Stack = createStackNavigator();

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
        <Stack.Screen name="CoinTable" component={CoinTableScreen} options={{ headerShown: false }} />
        <Stack.Screen
          name="CoinChartModal"
          component={CoinChartScreen}
          options={{
            headerShown: true,
            headerTitle: 'Coin Price Chart', // Customize the header title for the modal
          }}
          presentation="modal" // Set the presentation to "modal" to show it as a modal
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
