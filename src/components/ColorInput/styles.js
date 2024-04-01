import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  colorOptions: {
    flexDirection: "row",
  },
  colorOption: {
    width: 20,
    height: 20,
  },
  colorPreview: {
    width: 50,
    height: 50,
    borderRadius: 50,
    margin: 10,
  },
});

export default styles;
