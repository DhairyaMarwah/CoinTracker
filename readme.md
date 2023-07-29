# Coin Tracker App

Coin Tracker is a mobile app built with React Native that allows users to discover and track cryptocurrencies. The app fetches data from a cryptocurrency API and displays a list of coins along with their current prices. Users can sort the list in ascending or descending order based on the coin's price. Additionally, the app provides a modal view for each coin, displaying more detailed information and a price chart.

## Screenshots

![Screenshot 1](./screenshots/1.png)
![Screenshot 2](./screenshots/2.png)
![Screenshot 3](./screenshots/3.png)

## Installation and Setup

1. Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

2. Clone this repository to your local machine using:

```bash
git clone https://github.com/DhairyaMarwah/CoinTracker.git
```


Make sure you have Xcode installed for running the iOS simulator.

The app should now be running on your Android emulator, connected Android device, or iOS simulator.

# Dependencies
This project uses the following main dependencies:

1. React Native
2. react-native-animatable
3. lottie-react-native
4. react-navigation

For more detailed dependencies, please refer to the package.json file.

# Folder Structure 
```
src/
  ├── assets/
  |   └── ... (contains assets such as images, animations, etc.)
  ├── components/
  |   └── ... (contains reusable components)
  ├── services/
  |   └── fetchCoin.js (API service for fetching coin data)
      └── fetchCoinHistory.js (API service for fetching chart data)
  ├── styles/
  |   └── ... (contains styling files)
  ├── App.js (entry point of the app)
  ├── screens/
  |   └── CoinChartScreen.js (Screen for Chart)
      └── CoinTableScreen.js (main screen component)
      └── SplashScreen.js (Splash Screen for app)
  └── ... (other project files)

```
