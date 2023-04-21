import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import Home from "../components/Home";
import Settings from "../components/Settings";
import Stack from "../components/Stack";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

const HomeScreen = () => (
  <SafeAreaView>
    <Home />
  </SafeAreaView>
);

const StackScreen = () => (
  <SafeAreaView>
    <Stack />
  </SafeAreaView>
);

const MyStack = () => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} options={{ headerTitleAlign: "center" }} />
      <HomeStack.Screen name="Stack" component={StackScreen} options={{ headerTitleAlign: "center" }} />
    </HomeStack.Navigator>
  );
};

const MyTabs = () => {
  const options = {
    tabBarActiveTintColor: "blue",
    tabBarStyle: { height: 70, paddingBottom: 10, paddingTop: 10 },
  };
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={options}>
      <Tab.Screen
        name="Home"
        component={MyStack}
        // component={Home}
        // component={HomeScreen}
        options={{
          tabBarLabel: "Feed",
          tabBarIcon: ({ color, size }) => <MaterialCommunityIcons name="home" size={size} color={color} />,
          tabBarBadge: 3,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => <AntDesign name="setting" size={size} color={color} />,
          // headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default Navigation;
