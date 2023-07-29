// api.js
export const fetchCoinData = async () => {
    try {
      const response = await fetch("https://api.coingecko.com/api/v3/coins/");
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
      return [];
    }
  };
  