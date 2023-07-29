import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { fetchCoinData } from "../services/fetchCoin";
import {coinTableStyles} from "../styles/coinTableStyles";

import CoinRow from "../components/CoinRow";

const CoinTableScreen = () => {
  const [coinData, setCoinData] = useState([]);
  const [sortOption, setSortOption] = useState("asc"); // "asc" or "desc"
  const [isFilterModalVisible, setIsFilterModalVisible] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCoinData();
      setCoinData(data);
    };

    fetchData();
  }, []); 

  const navigation = useNavigation();

  const handleNavigateToChart = (symbol) => {
    navigation.navigate("CoinChartModal", { symbol });
  };

  const handleFilterChange = (option) => {
    setSortOption(option);
    // Apply the sorting logic here based on the selected option ("asc" or "desc")
    const sortedData = coinData.slice().sort((a, b) => {
      if (option === "asc") {
        return (
          a.market_data.current_price.usd - b.market_data.current_price.usd
        );
      } else {
        return (
          b.market_data.current_price.usd - a.market_data.current_price.usd
        );
      }
    });
    setCoinData(sortedData);
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
        <FlatList
          data={coinData}
          renderItem={renderCoinRow}
          keyExtractor={(item) => item.id}
          contentContainerStyle={coinTableStyles.listContent}
        />
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
