// CoinRow.js
import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const CoinRow = ({ item, onNavigateToChart }) => (
  <TouchableOpacity onPress={() => onNavigateToChart(item.id)}>
    <View style={styles.listItem}>
      <View style={styles.listItemLeft}>
        <Image style={styles.coinImage} source={{ uri: item.image.small }} />
        <View>
          <Text style={styles.listItemHeading}>{item.name}</Text>
          <Text style={styles.listItemSubtitle}>
            {item.symbol.toUpperCase()}
          </Text>
        </View>
      </View>
      <View style={styles.listItemRight}>
        <Text style={styles.listItemPrice}>
          ${item.market_data.current_price.usd}
        </Text>
        <Text style={styles.listItemSubtitle}>
          ${item.market_data.total_volume.usd}
        </Text>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      paddingVertical: 16,
      borderBottomWidth: 1,
      borderBottomColor: "#242424", // Darker border color
    },
    headerFlex: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    listItemRight: {
      alignItems: "flex-end",
    },
    listItemPrice: {
      color: "#fff",
      fontSize: 19,
      fontWeight: "bold",
    },
    listItemLeft: {
      flexDirection: "row",
    },
    listItemHeading: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "bold",
    },
    container: {
      flex: 1,
      paddingHorizontal: 0,
      paddingTop: 24,
      backgroundColor: "#121212", // Dark background color
    },
    header: {
      paddingHorizontal: 28,
      paddingTop: 40,
      marginBottom: 40,
    },
    listHeader: {
      marginBottom: 20,
    },
    headerHeading: {
      color: "#fff",
      fontSize: 24,
      fontWeight: "bold",
    },
    listHeading: {
      color: "#fff",
      fontSize: 24,
      fontWeight: "bold",
    },
    listSubtitle: {
      marginTop: 4,
      display: "flex",
      fontSize: 16,
      color: "#BFBFBF",
    },
    listItemSubtitle: {
      color: "#fff",
      marginTop: 4,
      opacity: 0.8,
      fontSize: 14,
    },
    listSubtitleFilter: {
      fontWeight: "bold",
      color: "#fff",
    },
    headerSubtitle: {
      color: "#BFBFBF",
      marginTop: 6,
      fontSize: 16,
    },
    listContainer: {
      backgroundColor: "#212121",
      width: "100%",
      paddingHorizontal: 28,
      paddingTop: 36,
      borderTopRightRadius: 40,
      height: "100%",
      borderTopLeftRadius: 40,
    },
    headerRow: {
      flexDirection: "row",
      borderBottomWidth: 1,
      borderBottomColor: "#303030", // Darker border color
      paddingBottom: 8,
      marginBottom: 8,
      fontWeight: "bold",
    },
    headerCell: {
      flex: 1,
      textAlign: "center",
      color: "#EFEFEF", // Light text color
    },
    rowContainer: {
      flexDirection: "row",
      alignItems: "center",
      borderBottomWidth: 1,
      borderBottomColor: "#242424", // Darker border color
      // paddingBottom: 8,
      paddingVertical: 18,
    },
    cell: {
      flex: 1,
      textAlign: "center",
      color: "#EFEFEF", // Light text color
    },
    coinImage: {
      width: 36,
      height: 36,
      marginRight: 8,
    },
    listContent: {
      paddingBottom: 16,
    },
    filterIconContainer: {
      padding: 10,
    },
    filterIcon: {
      width: 26,
      height: 26,
      // Add any styling for the filter icon here
    },
    modalContainer: {
      flex: 1,
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      justifyContent: "center",
      alignItems: "center",
    },
    filterOption: {
      backgroundColor: "#fff",
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginVertical: 5,
      borderRadius: 8,
    },
    filterOptionText: {
      fontSize: 16,
      fontWeight: "bold",
    },
  });

export default CoinRow;
