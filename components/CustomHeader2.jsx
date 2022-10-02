import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  Animated,
  FlatList,
  Text,
  useColorScheme,
  View,
  ScrollView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import COLORS from "../constants/color";

const CustomHeader2 = ({
  data2,
  namechap,
  id,
  name,
  isHome = false,
  navigation,
}) => {
  const [combobox, setCombobox] = useState(false);
  const colorScheme = useColorScheme();
  return (
    <View
      style={{
        flexDirection: "row",
        height: 50,
        paddingHorizontal: 8,
        backgroundColor: COLORS[colorScheme].background,
        zIndex: 2,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        {isHome ? (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <FontAwesome5 name='align-left' style={{ fontSize: 25 }} />
          </TouchableOpacity>
        ) : (
          <FontAwesome5
            name='angle-left'
            onPress={() => navigation.goBack()}
            style={{ fontSize: 30 }}
          />
        )}
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          flex: 2.5,
        }}
      >
        <View
          style={{
            justifyContent: "center",
          }}
        >
          <FontAwesome5
            name='angle-left'
            onPress={() => {}}
            style={{
              fontSize: 30,
              backgroundColor: "#d9534f",
              color: "#fff",
              paddingVertical: 4,
              paddingHorizontal: 12,
              borderRadius: 5,
            }}
          />
        </View>
        <View
          style={{
            justifyContent: "center",
            position: "relative",
          }}
        >
          <View
            style={{
              borderRadius: 5,
              borderColor: "black",
              borderWidth: 1,
              width: 130,
              paddingHorizontal: 5,
              paddingVertical: 5,
              justifyContent: "center",
            }}
          >
            <TouchableOpacity
              onPress={() => setCombobox(combobox === true ? false : true)}
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                height: 30,
                backgroundColor: "red",
              }}
            >
              <View
                style={{
                  // width:110,
                  justifyContent: "center",
                }}
              >
                <Text>{namechap}</Text>
              </View>
              <View
                style={{
                  justifyContent: "center",
                }}
              >
                {combobox === true ? (
                  <FontAwesome5 name='chevron-up' />
                ) : (
                  <FontAwesome5 name='chevron-down' />
                )}
              </View>
            </TouchableOpacity>
          </View>
          {combobox == false ? (
            <ScrollView
              nestedScrollEnabled
              style={{
                paddingTop: 10,
                zIndex: 500,
                height: 305,
                position: "absolute",
                top: 45,
                backgroundColor: "white",
                borderRadius: 5,
                borderColor: "black",
                borderWidth: 1,
                width: 130,
              }}
            >
              <FlatList
                data={data2?.chapters}
                style={{ minHeight: 100 }}
                renderItem={({ item }) => (
                  <TouchableOpacity
                    key={item.href}
                    onPress={() =>
                      navigation.navigate("Chap", {
                        href: item.href,
                        id: id,
                        name: name,
                        namechap: item.name,
                      })
                    }
                  >
                    <Text style={{ paddingLeft: 5, zIndex: 1000 }}>
                      {item.name}
                    </Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item) => item.href}
                ItemSeparatorComponent={() => <View style={{ height: 8 }} />}
              />
            </ScrollView>
          ) : (
            ""
          )}
        </View>
        <View
          style={{
            justifyContent: "center",
          }}
        >
          <FontAwesome5
            name='angle-right'
            onPress={() => {}}
            style={{
              fontSize: 30,
              backgroundColor: "#d9534f",
              color: "#fff",
              paddingVertical: 4,
              paddingHorizontal: 12,
              borderRadius: 5,
            }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        {/* <TouchableOpacity onPress={() => navigation.navigate("follows")}>
            <AntDesign name='hearto' style={{ fontSize: 28 }} />
          </TouchableOpacity> */}
        <TouchableOpacity onPress={() => navigation.navigate("searchs")}>
          <AntDesign name='search1' style={{ fontSize: 30, marginLeft: 15 }} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomHeader2;
