import React from "react";
import { Text, View } from "react-native";
const Headerchitiettruyenc = (props) => {
  return (
    <View>
      <Text style={{ fontSize: 20, paddingVertical: 20 }}>
        {props.name} - {props.namechap}
      </Text>
    </View>
  );
};

export default Headerchitiettruyenc;
