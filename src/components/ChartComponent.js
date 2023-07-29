// ChartComponent.js
import React from "react";
import { View, Text, StyleSheet, processColor } from "react-native";
import { LineChart } from "react-native-charts-wrapper";

const ChartComponent = ({ data, onSelect }) => {
  const chartData = {
    dataSets: [
      {
        values: data.map((dataPoint) => ({
          x: dataPoint.time,
          y: dataPoint.price,
        })),
        label: "Price",
        config: {
          color: processColor("green"),
          label: "Price",
          drawValues: false,
          lineWidth: 2,
          drawCircles: false,
        },
      },
    ],
  };

  return (
    <View style={styles.chartContainer}>
      <LineChart
        style={styles.chart}
        data={chartData}
        xAxis={{
          valueFormatter: "date",
          valueFormatterPattern: "dd-MM-yyyy",
          drawLabels: false,
          drawGridLines: false,
          drawBorders: false,
        }}
        yAxis={{
          left: { enabled: false },
          right: {
            axisLineWidth: 1,
            drawLabels: false,
            drawGridLines: false,
          },
        }}
        drawGridBackground={false}
        drawBorders={false}
        onSelect={onSelect}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  chartContainer: {
    width: "110%",
    height: 400,
    backgroundColor: "transparent",
    elevation: 2,
  },
  chart: {
    flex: 1,
  },
});

export default ChartComponent;
