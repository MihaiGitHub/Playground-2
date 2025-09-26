import React from "react";
import { View, Text } from "react-native";

interface Display {
  name: string;
}

const Display: React.FC<Display> = ({ name }) => {
  return (
    <View>
      <Text>{name}</Text>
    </View>
  );
};

export default Display;
