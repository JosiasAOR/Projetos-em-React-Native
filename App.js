import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import Home from "./home/Home";
import Netflix from "./home/Netflix";
import Calculadora from "./home/Calculadora";
import Flat from "./home/Flastlist";

export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "white",
            },

            headerTintColor: "black",
            alignItems: "center",
            headerTitleStyle: {
            },
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{
            headerStyle: {
              backgroundColor: "black",
            },

            headerTintColor: "white",
            alignItems: "center",
            headerTitleStyle: {},
          }}
          name="Netflix"
          component={Netflix}
        />
        <Stack.Screen name="Calculadora" component={Calculadora} />

        <Stack.Screen name="Flat" component={Flat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    margin: 100,
  },
  texto: {
    textAlign: "center",
    marginTop: 100,
    alignItems: "center",
    fontSize: 30,
    padding: 10,
    color: "black",
  },
});
