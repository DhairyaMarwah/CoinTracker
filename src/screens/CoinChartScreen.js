import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, processColor } from 'react-native';
import { LineChart } from 'react-native-charts-wrapper';
import axios from 'axios';

const CoinChartScreen = ({ route }) => {
  const { symbol } = route.params;
  symbol2 = symbol.toLowerCase();
  const [historicalData, setHistoricalData] = useState([]);

  useEffect(() => {
    // Fetch real historical price data for the selected coin
    const fetchHistoricalData = async () => {
      try {
        const response = await axios.get(
          `https://api.coingecko.com/api/v3/coins/${symbol2}/market_chart?vs_currency=usd&from=1392577232&to=1422577232&precision=4`,
          {
            params: {
              vs_currency: 'usd',
              days: 7, // Fetch data for the last 7 days
            },
          }
        );
        const data = response.data.prices;

        // Process the API response to extract historical data points
        const processedData = data.map((dataPoint) => ({
          time: new Date(dataPoint[0]).getTime(),
          price: dataPoint[1],
        }));

        setHistoricalData(processedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchHistoricalData();
  }, [symbol]);

  // Extracting data and labels for the chart
  const chartData = {
    dataSets: [
      {
        values: historicalData.map((dataPoint) => ({
          x: dataPoint.time,
          y: dataPoint.price,
        })),
        label: 'Price',
        config: {
          color: processColor('green'), // Change line color to green
          drawValues: false, // Hide data point values on the chart
          lineWidth: 2,
          drawCircles: false, // Hide circles at data points
        },
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>{symbol} Price Chart</Text>
      <View style={styles.chartContainer}>
        <LineChart
          style={styles.chart}
          data={chartData}
          xAxis={{
            valueFormatter: 'date',
            valueFormatterPattern: 'dd-MM-yyyy', // Customize date format as needed
            drawLabels: false, // Hide labels along the x-axis
            drawGridLines: false, // Hide grid lines along the x-axis
          }}
          yAxis={{
            left: { enabled: false },
            right: {
              axisLineWidth: 1, // Add a vertical axis line on the right side
              drawLabels: false, // Hide labels along the y-axis
              drawGridLines: false, // Hide grid lines along the y-axis
            },
          }}
          drawGridBackground={false}
        />
      </View>
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
    marginBottom: 16,
    fontWeight: 'bold',
    color: '#EFEFEF', // Light text color
  },
  chartContainer: {
    width: '100%',
    height: 300,
    // backgroundColor: '#303030', // Dark background color for the chart container
    borderRadius: 8,
    elevation: 2, // Add a subtle shadow to the chart container
  },
  chart: {
    flex: 1,
  },
});

export default CoinChartScreen;
