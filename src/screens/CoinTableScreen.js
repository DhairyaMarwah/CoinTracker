import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity,ActivityIndicator, Image, Modal } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { fetchCoinData } from "../services/fetchCoin";
import { coinTableStyles } from "../styles/coinTableStyles";

import CoinRow from "../components/CoinRow";

const CoinTableScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [coinData, setCoinData] = useState([]);
  const [sortOption, setSortOption] = useState("asc"); // "asc" or "desc"
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);

  // In-memory cache to store fetched coin data
  const dataCache = {};

  useEffect(() => {
    // Function to fetch coin data
    const fetchData = async () => {
      if (dataCache["coinData"]) {
        // If data is available in cache, use it
        setCoinData(dataCache["coinData"]);
        setIsLoading(false);
      } else {
        // Otherwise, fetch data from the API
        try {
          const data = await fetchCoinData();
          // Update the cache with the new data
          dataCache["coinData"] = data;
          setCoinData(data);
          setIsLoading(false);
        } catch (error) {
          console.error("Error fetching data:", error);
          setIsLoading(false);
        }
      }
    };

    fetchData();
  }, []);


  const navigation = useNavigation();
  const handleNavigateToChart = (symbol) => {
    navigation.navigate("CoinChartModal", { symbol });
  };

  // Function to handle sorting and caching
  const handleFilterChange = (option) => {
    if (sortOption === option) {
      return; // Data is already sorted based on the selected option
    }

    // Apply the sorting logic here based on the selected option ("asc" or "desc")
    const sortedData = coinData.slice().sort((a, b) => {
      if (option === "asc") {
        return a.market_data.current_price.usd - b.market_data.current_price.usd;
      } else {
        return b.market_data.current_price.usd - a.market_data.current_price.usd;
      }
    });

    // Update the cache with the sorted data
    dataCache["coinData"] = sortedData;
    setCoinData(sortedData);

    setSortOption(option);
  };

  const toggleFilterModal = () => {
    setIsFilterModalVisible((prev) => !prev);
  };

  const renderCoinRow = ({ item }) => (
    <CoinRow item={item} onNavigateToChart={handleNavigateToChart} />
  );

  return (
    <View style={coinTableStyles.container}>
      <View style={coinTableStyles.header}>
        <Text style={coinTableStyles.headerHeading}>Hello, Dhairya 👋</Text>
        <Text style={coinTableStyles.headerSubtitle}>
          Discover cryptocurrencies today!
        </Text>
      </View>
      <View style={coinTableStyles.listContainer}>
        <View style={coinTableStyles.headerFlex}>
          <View style={coinTableStyles.listHeader}>
            <Text style={coinTableStyles.listHeading}>Market</Text>
            <Text style={coinTableStyles.listSubtitle}>
              Sort by :
              <Text style={coinTableStyles.listSubtitleFilter}>
                {sortOption === "asc" ? "Ascending" : "Descending"}
              </Text>
            </Text>
          </View>
          <View style={coinTableStyles.listHeading}>
            <Text style={coinTableStyles.listHeading}>
              <TouchableOpacity
                style={coinTableStyles.filterIconContainer}
                onPress={toggleFilterModal}
              >
                <Image
                  style={coinTableStyles.filterIcon}
                  source={require("../assets/filter.png")}
                />
              </TouchableOpacity>
            </Text>
          </View>
        </View>
        {isLoading ? (
        <View style={coinTableStyles.loaderContainer}>
          <ActivityIndicator size="large" color="green" />
          {/* <Text style={coinTableStyles.loaderText}>Loading...</Text> */}
        </View>
      ) : (
        <FlatList
          data={coinData}
          renderItem={renderCoinRow}
          keyExtractor={(item) => item.id}
          contentContainerStyle={coinTableStyles.listContent}
        />
      )}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isFilterModalVisible}
        onRequestClose={toggleFilterModal}
      >
        <View style={coinTableStyles.modalContainer}>
          {/* Design your filter options here */}
          <TouchableOpacity
            style={coinTableStyles.filterOption}
            onPress={() => {
              handleFilterChange("asc");
              toggleFilterModal();
            }}
          >
            <Text style={coinTableStyles.filterOptionText}>Ascending</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={coinTableStyles.filterOption}
            onPress={() => {
              handleFilterChange("desc");
              toggleFilterModal();
            }}
          >
            <Text style={coinTableStyles.filterOptionText}>Descending</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

export default CoinTableScreen;
