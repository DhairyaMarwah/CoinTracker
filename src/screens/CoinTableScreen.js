import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CoinTableScreen = () => {
  const [coinData, setCoinData] = useState([]);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCoinData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchCoinData();
  }, []);

  const navigation = useNavigation();

  const handleNavigateToChart = (symbol) => {
    navigation.navigate('CoinChart', { symbol });
  };

  const renderCoinRow = ({ item }) => (
    <TouchableOpacity onPress={() => handleNavigateToChart(item.id)}>
      <View style={styles.rowContainer}>
        <Image style={styles.coinImage} source={{ uri: item.image.small }} />
        <Text style={styles.cell}>{item.name}</Text>
        <Text style={styles.cell}>{item.symbol.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.headerCell}>Icon</Text>
        <Text style={styles.headerCell}>Name</Text>
        <Text style={styles.headerCell}>Symbol</Text>
      </View>
      <FlatList
        data={coinData}
        renderItem={renderCoinRow}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
    backgroundColor: '#1A1A1A', // Dark background color
  },
  headerRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#444', // Darker border color
    paddingBottom: 8,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  headerCell: {
    flex: 1,
    textAlign: 'center',
    color: '#EFEFEF', // Light text color
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#444', // Darker border color
    paddingBottom: 8,
    marginBottom: 8,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    color: '#EFEFEF', // Light text color
  },
  coinImage: {
    width: 32,
    height: 32,
    marginRight: 8,
  },
  listContent: {
    paddingBottom: 16,
  },
});

export default CoinTableScreen;
