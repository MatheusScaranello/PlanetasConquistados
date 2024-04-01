import { Text, View, Image, TouchableOpacity } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";

export default function Profile({ route }) {
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <Title style={styles.title} title="Planets" />

      <View style={styles.planet}>
        <Text style={styles.planetName}>{data.name}</Text>
        <Text style={styles.detail}>
          Date of Conquest: {data.dateOfConquist}
        </Text>
        <Text style={styles.detail}>Population: {data.population}</Text>
        <Text style={styles.detail}>
          Natural Resources: {data.naturalResources}
        </Text>
        <Text style={styles.detail}>
          Number of Human Settlements: {data.numberHumanSettlements}
        </Text>
        <Text style={styles.detail}>Location: {data.location}</Text>
        <Text style={styles.detail}>Communication: {data.communication}</Text>
        <Text style={styles.detail}>Planet Ruler: {data.planetRuler}</Text>
        <View>
          <Text style={styles.detail}>Colors:</Text>
          <View
            style={[
              styles.colors,
              {
                backgroundColor: data.color1,
              },
            ]}
          ></View>
          <View
            style={[
              styles.colors,
              {
                backgroundColor: data.color2,
              },
            ]}
          ></View>
        </View>
      </View>
      <TouchButton
        title="Edit Planet"
        onPress={() => {
          navigation.navigate("Users", { data, edit: true });
        }}
      />
    </View>
  );
}
