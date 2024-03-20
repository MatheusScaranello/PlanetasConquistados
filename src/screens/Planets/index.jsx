import { Text, View, Image } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";

export default function Profile({ route }) {
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <Title title="Planets" />

      <View style={styles.planet}>
        <Title title={data.name} />
      </View>
    </View>
  );
}
