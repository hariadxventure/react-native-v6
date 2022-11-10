// //================//
// // Native Stack Savigator
// //================//
// import { StatusBar } from "expo-status-bar";
// import { StyleSheet, Text, View } from "react-native";
// import About from "./screens/About";
// import Blog from "./screens/Blog";
// import Contact from "./screens/Contact";
// import Home from "./screens/Home";

// import Icon from "react-native-vector-icons/MaterialCommunityIcons";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { NavigationContainer } from "@react-navigation/native";

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Home"
//         screenOptions={{ headerStyle: { backgroundColor: "red" } }}
//       >
//         <Stack.Group screenOptions={{headerStyle: { backgroundColor: "yellow" }}}>
//           <Stack.Screen name="Blog" component={Blog} />
//           <Stack.Screen name="About" component={About} initialParams={{id: 11}}/>
//         </Stack.Group>
//         <Stack.Screen
//           name="Home"
//           component={Home}
//           options={{
//             headerStyle: { backgroundColor: "gray" },
//             title: "adxventure",
//             headerTintColor: "white",
//             headerTitleStyle: { fontWeight: "bold" },
//             headerTitleAlign: "center",
//             headerLeft: (props) => (
//               <Icon
//                 name="home"
//                 size={40}
//                 color="white"
//                 style={{ paddingLeft: 10 }}
//                 onPress={() => console.log("clicked")}
//               />
//             ),
//             headerRight: (props) => (
//               <Icon
//                 name="bell-circle"
//                 size={30}
//                 color="white"
//                 style={{ paddingRight: 20 }}
//                 onPress={() => console.log("clicked")}
//               />
//             ),
//             // headerShown: false
//           }}
//         />
//         <Stack.Screen name="Contact" component={Contact} />
//       </Stack.Navigator>
//     </NavigationContainer>

//     //
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "orangered",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
