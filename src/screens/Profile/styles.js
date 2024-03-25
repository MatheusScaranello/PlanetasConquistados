import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    padding: 20,
    justifyContent: "center",
  },
  user: {
    backgroundColor: "#333333",
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 20,
    textShadowColor: "#000000",
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 5,
  },
  foto: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  text: {
    fontSize: 13,
    color: "#FFFFFF",
    marginBottom: 10,
    marginLeft: 10,
  },
  line: {
    height: 1,
    backgroundColor: "#FF6347",
    marginBottom: 20,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    display: "flex",
  },
});

export default styles;
