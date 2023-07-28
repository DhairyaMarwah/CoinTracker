import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Perform any necessary initialization tasks here (e.g., data fetching, setup).

    // Simulate a delay for demonstration purposes (e.g., 2000ms).
    setTimeout(() => {
      // Navigate to the Coin Table screen after the delay.
      navigation.navigate('CoinTable');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Animatable.Text animation="fadeIn" duration={1500} style={styles.header}>
        Coin Tracker
      </Animatable.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1A1A1A', // Dark background color
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#EFEFEF', // Light text color
  },
});

// Set navigation options to customize the header appearance
SplashScreen.navigationOptions = {
  headerShown: false, // Hide the header for the SplashScreen
};

export default SplashScreen;