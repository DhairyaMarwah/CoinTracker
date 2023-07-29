import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { fetchHistoricalData } from "../services/fetchCoinHistory";
import ChartComponent from "../components/ChartComponent";
import { coinChartStyles } from "../styles/coinChartStyles";

const CoinChartScreen = ({ route }) => {
  const { symbol } = route.params;
  const [historicalData, setHistoricalData] = useState([]);
  const [selectedPoint, setSelectedPoint] = useState(null);

  //* In-memory cache to store historical data
  const dataCache = {};

  useEffect(() => {
    //* Function to fetch historical data for a coin
    const fetchData = async () => {
      if (dataCache[symbol]) {
        //* If data is available in cache, use it
        setHistoricalData(dataCache[symbol]);
      } else {
        //* Otherwise, fetch data from the API
        const data = await fetchHistoricalData(symbol);
        //* Update the cache with the new data
        dataCache[symbol] = data;
        setHistoricalData(data);
      }
    };

    fetchData();
  }, [symbol]);

  //* Function to handle the onChartSelect event
  const handleChartSelect = (event) => {
    const { x, y } = event.nativeEvent.data;
    setSelectedPoint({ x, y });
  };

  return (
    <View style={coinChartStyles.container}>
      <Text style={coinChartStyles.header}>{symbol} Price Chart</Text>
      <ChartComponent data={historicalData} onSelect={handleChartSelect} />
      {selectedPoint && (
        <View style={coinChartStyles.selectedPointContainer}>
          <Text style={coinChartStyles.selectedPointText}>Selected Point:</Text>
          <Text style={coinChartStyles.selectedPointText}>
            X: {selectedPoint.x}
          </Text>
          <Text style={coinChartStyles.selectedPointText}>
            Y: {selectedPoint.y}
          </Text>
        </View>
      )}
    </View>
  );
};

export default CoinChartScreen;
