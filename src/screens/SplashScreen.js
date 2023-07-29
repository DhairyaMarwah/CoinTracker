import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import LottieView from "lottie-react-native";

const SplashScreen = ({ navigation }) => {
  const texts = [
    "Transformation of the financial Structure",
    "Track Your Portfolio using Crypto Tracker",
    "Trade with Confidence with Crypto Tracker",
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleButtonPress = () => {
    navigation.navigate("CoinTable");
  };

  return (
    <View style={styles.container}>
      <LottieView
        style={styles.lottie}
        source={require("../assets/animation/animation.json")}
        autoPlay={true}
        loop
      />
      <Animatable.Text
        animation="fadeIn"
        duration={500}
        style={styles.header}
        key={texts[currentTextIndex]} // Add a unique key to the animated component
      >
        {texts[currentTextIndex]}
      </Animatable.Text>
      {/* {currentTextIndex === texts.length - 1 && ( */}
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonTextStyle}>Get Started</Text>
      </TouchableOpacity>
      {/* )} */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    paddingTop: 92,
    alignItems: "center",
    backgroundColor: "#121212", // Dark background color
  },
  button: {
    backgroundColor: "#FFF",
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 24,
  },
  buttonTextStyle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  lottie: {
    width: 300,
    height: 300,
  },
  header: {
    fontSize: 28,
    paddingHorizontal: 28,
    paddingTop: 40,
    textAlign: "center",
    fontWeight: "bold",
    color: "#fff", // Light text color
  },
});

// Set navigation options to customize the header appearance
SplashScreen.navigationOptions = {
  headerShown: false, // Hide the header for the SplashScreen
};

export default SplashScreen;
