import React, { useState } from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";

const Colors = ["#FF5733", "#33FF57", "#5733FF", "#FFFF33", "#33FFFF"];

export default function ColorInput(selectedColor) {
  const [color, setColor] = useState(selectedColor);

  return (
    <View style={styles.container}>
      <View style={styles.colorOptions}>
        {Colors.map((colorOption) => (
          <TouchableOpacity
            key={colorOption}
            style={[styles.colorOption, { backgroundColor: colorOption }]}
            onPress={() => setColor(colorOption)}
          />
        ))}
      </View>
      <View style={[styles.colorPreview, { backgroundColor: color }]} />
      <TextInput
        style={styles.colorInput}
        placeholder="Digite uma cor"
        value={color}
        onChangeText={setColor}
      />
    </View>
  );
}
