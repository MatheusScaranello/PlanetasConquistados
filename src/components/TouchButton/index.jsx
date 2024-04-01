import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import Title from "../Title";

const TouchButton = ({ route, title, data }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.fundo}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate(route, { data, edit: false })}
      >
        <Title title={title} />
      </TouchableOpacity>
    </View>
  );
};

export default TouchButton;
