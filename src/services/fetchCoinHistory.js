// api.js
import axios from "axios";

export const fetchHistoricalData = async (symbol) => {
  try {
    const symbol2 = symbol.toLowerCase();
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/${symbol2}/market_chart?vs_currency=usd&from=1392577232&to=1422577232&precision=4`,
      {
        params: {
          vs_currency: "usd",
          days: 7, // Fetch data for the last 7 days
        },
      }
    );
    return response.data.prices.map((dataPoint) => ({
      time: new Date(dataPoint[0]).getTime(),
      price: dataPoint[1],
    }));
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
