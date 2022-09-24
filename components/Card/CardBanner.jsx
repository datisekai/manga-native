import {
  ImageBackground,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";
import React from "react";
import COLORS from "../../constants/color";
import { getImage } from "../../utils";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import AntDesign from "@expo/vector-icons/AntDesign";

const CardBanner = ({ href, img, name, newChapters, info }) => {
  const colorScheme = useColorScheme();
  return (
    <View>
      <ImageBackground source={{ uri: getImage(img) }} style={styles.image}>
        <View style={styles.bottomImage}>
          <Text
            style={{ ...styles.text, color: COLORS[colorScheme].background }}
            numberOfLines={1}
          >
            {name}
          </Text>
          <View style={styles.viewInfo}>
            <View style={styles.info}>
              <AntDesign
                style={{
                  ...styles.infoIcon,
                  color: COLORS[colorScheme].background,
                }}
                name='eye'
              />
              <Text
                style={{
                  ...styles.infoText,
                  color: COLORS[colorScheme].background,
                }}
              >
                {info["\nLượt xem"]}
              </Text>
            </View>
            <View style={styles.info}>
              <MaterialIcons
                style={{
                  ...styles.infoIcon,
                  color: COLORS[colorScheme].background,
                }}
                name='access-time'
              />
              <Text
                style={{
                  ...styles.infoText,
                  color: COLORS[colorScheme].background,
                }}
              >
                {info["\nNgày cập nhật"]}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CardBanner;

const styles = StyleSheet.create({
  image: {
    width: 200,
    aspectRatio: 168 / 223,
    position: "relative",
  },
  bottomImage: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: 8,
    backgroundColor: "rgba(0,0,0,0.616)",
  },
  text: {
    textAlign: "center",
    fontSize: 15,
  },
  info: {
    flexDirection: "row",
    alignItems: "center",
  },
  viewInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  infoText: {
    fontSize: 13,
    marginLeft: 4,
  },
  infoIcon: {
    fontSize: 15,
  },
});
