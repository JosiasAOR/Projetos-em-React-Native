import { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Pressable,
  Text,
  TextInput,
} from "react-native";

export default function Netflix() {
  const [login, setLogin] = useState(0);
  const [senha, setSenha] = useState("");

  function validar() {
    if (login == "josiasaor@gmail.com" && senha == "123") {
      alert("valido");
      console.log(senha);
    } else {
      alert("usuario ou senha invalidos");
    }
  }
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: "https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png",
        }}
      />
      <Text style={styles.login}>E-MAIL </Text>
      <TextInput style={styles.input} onChangeText={setLogin} />
      <Text style={styles.login}>SENHA </Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        onChangeText={setSenha}
      />
      <Pressable>
        <Text style={styles.button1} onPress={validar}>
          LOGIN
        </Text>
      </Pressable>
      <Text style={styles.criarConta}>AINDA NAO TEM UMA CONTA ? </Text>
      <Pressable>
        <Text
          style={styles.button2}
          onPress={() => {
            alert(`deu certo`);
          }}
        >
          CRIAR CONTA
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#000000",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    alignSelf: "center",
    width: 260,
    height: 70,
    marginBottom: 50,
  },
  button1: {
    paddingTop: 5,
    marginTop: 10,
    color: "black",
    fontSize: 20,
    border: 100,
    borderRadius: 5,
    backgroundColor: "red",
    textAlign: "center",
    margin: "auto",
    width: 300,
    height: 40,
    letterSpacing: 5,
  },
  button2: {
    padding: 5,
    color: "black",
    fontSize: 20,
    border: 100,
    borderRadius: 5,
    backgroundColor: "red",
    textAlign: "center",
    width: 300,
    height: 40,
    margin: "auto",
    letterSpacing: 5,
  },

  input: {
    textAlign: "center",
    color: "white",
    borderRadius: 5,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 300,
    fontSize: 22,
    borderWidth: 2,
    borderColor: "white",
    justifyContent: "center",
    alignItems: "center",
    letterSpacing: 2,
  },
  login: {
    marginBottom: -10,
    color: "white",
    marginTop: 20,
  },
  criarConta: {
    color: "white",
    marginTop: 80,
    marginBottom: 10,
  },
});
