import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.container}>
        <Text style={styles.titulo}>Meus projetos</Text>
        <Text
          style={styles.texto}
          onPress={() => navigation.navigate("Netflix")}
        >
          Netflix
        </Text>
        <Text
          style={styles.texto}
          onPress={() => navigation.navigate("Calculadora")}
        >
          Calculadora
        </Text>
        <Text style={styles.texto} onPress={() => navigation.navigate("Flat")}>
          Flatlist
        </Text>
      </Pressable>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
  },
  texto: {
    fontSize: 20,
    textAlign: "center",
    borderWidth: 2,
    marginTop: 10,
    width: 150,
    borderRadius: 5,
    backgroundColor: "white",
  },
  titulo: {
    fontSize: 30,
    padding: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
});
