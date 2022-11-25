import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import COLORS from "../../constants/color";
import { getImage } from "../../utils";

const windowWidth = Dimensions.get("window").width;

const CardHistory = ({ href, img, name, navigation }) => {
  const colorScheme = useColorScheme();

  const { chapters, comics } = useSelector((state) => state.history);

  const dispatch = useDispatch();

  const handlePress = async () => {
    navigation.navigate("HomeDetail", {
      href: href,
      name: name,
    });
  };

  return (
    <View
      style={{
        ...styles.container,
      }}
    >
      <TouchableOpacity onPress={handlePress}>
        <Image style={styles.image} source={{ uri: getImage(img) }} />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("HomeDetail", {
            href: href,
            name: name,
          })
        }
      >
        <Text
          style={{ ...styles.name, color: COLORS[colorScheme].text }}
          numberOfLines={1}
        >
          {name}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardHistory;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    aspectRatio: 168 / 223,
    borderRadius: 5,
  },
  container: {
    width: windowWidth * 0.5 - 10,
    marginTop: 16,
    marginHorizontal: 3,
  },
  name: {
    fontSize: 15,
    marginTop: 8,
  },
  chapter: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 4,
  },

  listChapter: {
    marginTop: 8,
  },
});
