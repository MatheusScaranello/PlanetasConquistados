import { View, Text } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";

export default function Home() {
  return (
    <View style={styles.container}>
      <Title title="Home" />
      <View>
        <Text style={styles.text}>Welcome to the Creator Planets!</Text>
        <TouchButton title="Create your planet" route="Users" />
      </View>
    </View>
  );
}
