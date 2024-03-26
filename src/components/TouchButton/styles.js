import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "transparent", // Botão com fundo transparente
    borderRadius: 10, // Borda arredondada para suavidade
    borderWidth: 2, // Borda laranja para destacar
    borderColor: "#FF6347", // Cor laranja vibrante para a borda
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
    color: "#FF6347", // Cor laranja vibrante para o texto do botão
    fontWeight: "bold",
  },
});

export default styles;
