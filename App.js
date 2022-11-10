//================//
// Drawer navigator
//================//
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import About from "./screens/About";
import Blog from "./screens/Blog";
import Contact from "./screens/Contact";
import Home from "./screens/Home";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { useEffect } from "react";

const Drawer = createDrawerNavigator();

export default function App({ navigation }) {
  console.log(navigation);
  useEffect(() => {
    navigation?.openDrawer();
  }, []);
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        // screenOptions={{
        //   headerStyle: { backgroundColor: "red" },
        //   drawerActiveBackgroundColor: "red",
        //   drawerActiveTintColor: 'yellow',
        //   drawerStyle: {
        //     backgroundColor: 'blue',
        //     width:  300
        //   }
        // }}
        // defaultStatus="open"
      >
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Blog" component={Blog} />
        <Drawer.Screen
          name="About"
          component={About}
          initialParams={{ id: 11 }}
        />
        <Drawer.Screen name="Contact" component={Contact} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: "orangered",
    // alignItems: "center",
    // justifyContent: "center",
  },
});
