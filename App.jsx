import { FontAwesome5 } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "@rneui/themed";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as React from "react";
import { Button, Text, useColorScheme, View } from "react-native";
import "react-native-gesture-handler";
import { Provider } from "react-redux";
import CustomDrawerContent from "./components/CustomDrawerContent";
import COLORS from "./constants/color";
import { store } from "./redux";
import CategoryStack from "./screens/Category/CategoryStack";
import HistoryScreen from "./screens/History/HistoryScreen";
import HomeStack from "./screens/Home/HomeStack";
import HotScreen from "./screens/Hot/HotScreen";
import SearchStack from "./screens/Search/SearchStack";
import { navOptionHandler } from "./utils";

const Tab = createBottomTabNavigator();

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Button onPress={() => navigation.goBack()} title='Go back home' />
    </View>
  );
}

function TabNavigator() {
  const colorScheme = useColorScheme();
  return (
    <Tab.Navigator>
      <Tab.Screen
        options={{
          ...navOptionHandler(),
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              style={{
                fontSize: 20,
                color: focused
                  ? COLORS[colorScheme].tabIconSelected
                  : COLORS[colorScheme].tabIconDefault,
              }}
              name='clinic-medical'
            />
          ),
          title: ({ focused }) => (
            <Text
              style={{
                fontSize: 12,
                color: focused
                  ? COLORS[colorScheme].tabIconSelected
                  : COLORS[colorScheme].tabIconDefault,
              }}
            >
              Trang ch???
            </Text>
          ),
        }}
        name='Homes'
        component={HomeStack}
      />
      <Tab.Screen
        options={{
          ...navOptionHandler(),
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              style={{
                fontSize: 20,
                color: focused
                  ? COLORS[colorScheme].tabIconSelected
                  : COLORS[colorScheme].tabIconDefault,
              }}
              name='history'
            />
          ),
          title: ({ focused }) => (
            <Text
              style={{
                fontSize: 12,
                color: focused
                  ? COLORS[colorScheme].tabIconSelected
                  : COLORS[colorScheme].tabIconDefault,
              }}
            >
              L???ch s???
            </Text>
          ),
        }}
        name='Histories'
        component={HistoryScreen}
      />
      {/* <Tab.Screen
        options={{
          ...navOptionHandler(),
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              style={{
                fontSize: 20,
                color: focused
                  ? COLORS[colorScheme].tabIconSelected
                  : COLORS[colorScheme].tabIconDefault,
              }}
              name='cogs'
            />
          ),
          title: ({ focused }) => (
            <Text
              style={{
                fontSize: 12,
                color: focused
                  ? COLORS[colorScheme].tabIconSelected
                  : COLORS[colorScheme].tabIconDefault,
              }}
            >
              C??i ?????t
            </Text>
          ),
        }}
        name='Settings'
        component={SettingStack}
      /> */}
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <NavigationContainer>
            <Drawer.Navigator
              drawerContent={(props) => <CustomDrawerContent {...props} />}
              initialRouteName='MenuTab'
            >
              <Drawer.Screen
                name='HomeMain'
                options={{ ...navOptionHandler(), title: "Trang ch???" }}
                component={TabNavigator}
              />
              <Drawer.Screen
                name='searchs'
                options={{ ...navOptionHandler(), title: "T??m ki???m" }}
                component={SearchStack}
              />

              <Drawer.Screen
                name='hots'
                options={{ ...navOptionHandler(), title: "Hot" }}
                component={HotScreen}
              />
              {/* <Drawer.Screen
              name='follows'
              options={{ ...navOptionHandler(), title: "Theo d??i" }}
              component={FollowScreen}
            /> */}
              <Drawer.Screen
                name='histories'
                options={{ ...navOptionHandler(), title: "L???ch s???" }}
                component={HistoryScreen}
              />
              <Drawer.Screen
                name='categories'
                options={{ ...navOptionHandler(), title: "Th??? lo???i" }}
                component={CategoryStack}
              />
              {/* <Drawer.Screen
              name='log??n'
              options={{ ...navOptionHandler(), title: "????ng nh???p" }}
              component={LoginScreen}
            /> */}
            </Drawer.Navigator>
          </NavigationContainer>
        </Provider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
