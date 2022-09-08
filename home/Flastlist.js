import { useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

export default function Flastlist() {
  const TAREFAS_INICIAL = [
    { id: 1, descricao: "Comer torrada antes de dormir", feito: false },
    { id: 2, descricao: "Jogar Fortnite antes de dormir", feito: true },
    { id: 3, descricao: "Preparar aula da 2ª fase", feito: false },
    { id: 4, descricao: "Dar comida para os gatos", feito: true },
  ];

  const [tarefas, setTarefas] = useState(TAREFAS_INICIAL);

  clicouNaTarefa = (tarefaClicada) => {
    setTarefas((prevState) => {
      const vetorAtualizado = prevState.map((i) => {
        if (i.id == tarefaClicada.id) {
          if (tarefaClicada.feito == true) {
            i.feito = false;
          } else {
            i.feito = true;
          }
        }
        return i;
      });
      console.log(vetorAtualizado);
      return vetorAtualizado;

      // falta alterar o atribuito feito para true ou false
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de tarefas</Text>

      <FlatList
        data={tarefas}
        renderItem={({ item }) => (
          <Text
            onPress={() => clicouNaTarefa(item)}
            style={item.feito ? styles.concluido : styles.Cnao}
          >
            {item.descricao}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  titulo: {
    fontSize: 30,
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 15,
    fontWeight: "bold",
  },
  concluido: {
    textDecorationLine: "line-through",
    fontSize: 20,
    marginLeft: 20,
    marginTop: 10,
    borderBottomWidth: 1,
    width: 350,
    borderColor: "#E4E4E4",

  },
  Cnao: {
    fontSize: 20,
    marginLeft: 20,
    marginTop: 10,
    borderBottomWidth: 1,
    width: 350,
    borderColor: "#E4E4E4",
  },
});
