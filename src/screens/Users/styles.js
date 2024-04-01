import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    alignItems: "center",
    backgroundColor: "#000000",
  },
  form: {
    width: "80%",
  },
  input: {
    height: 40,
    margin: 2,
    borderWidth: 1,
    textAlign: "center",
    borderColor: "#FF6347",
    borderRadius: 20,
    color: "#FFFFFF",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#FF6347",
    padding: 15,
    borderRadius: 25,
    marginTop: 20,
    elevation: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  list: {
    width: "80%",
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: "#FFFFFF",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FF6347",
    marginBottom: 20,
    textShadowColor: "#FF6347",
    textShadowOffset: {
      width: 2,
      height: 2,
    },
    textShadowRadius: 5,
  },
  placeholder: {
    color: "#CCCCCC",
  },
  colors: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  dateInputs: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputDate: {
    height: 40,
    width: "30%",
    margin: 2,
    borderWidth: 1,
    textAlign: "center",
    borderColor: "#FF6347",
    borderRadius: 20,
    color: "#FFFFFF",
  },
  listPlanets: {
    width: "80%",
    marginTop: 20,
  },
  planet: {
    backgroundColor: "#FF6347",
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
  },
  planetButton: {
    alignItems: "center",
    color: "#FFFFFF",
    padding: 5,
    width: "50%",
    borderRadius: 20,
  },
  planetText: {
    color: "#FFFFFF",
    fontSize: 18,
  },
});

export default styles;
