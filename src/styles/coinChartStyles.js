// commonStyles.js
import { StyleSheet } from "react-native";

export const coinChartStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 52,
    alignItems: "center",
    backgroundColor: "#121212",
  },
  header: {
    fontSize: 24,
    marginBottom: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  selectedPointContainer: {
    backgroundColor: "#212121",
    borderRadius: 8,
    padding: 10,
    marginTop: 16,
  },
  selectedPointText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 4,
  },
});
