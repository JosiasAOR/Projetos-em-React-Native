import { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Text,
  StyleSheet,
  Pressable,
  ImageBackground,
} from 'react-native';

export default function Calculadora() {
  const [valorA, setValorA] = useState('');
  const [valorB, setValorB] = useState('');
  const [resultado, setResultado] = useState(0);
  const [operacao, setOperacao] = useState('');
  const fundo = {
    uri: 'https://images.alphacoders.com/104/thumb-1920-1048949.jpg',
  };

  somar = () => {
    setResultado(Number(valorA) + Number(valorB));
  };
  subtrair = () => {
    setResultado(Number(valorA) - Number(valorB));
  };
  multiplicar = () => {
    setResultado(Number(valorA) * Number(valorB));
  };
  dividir = () => {
    setResultado(Number(valorA) / Number(valorB));
  };

  return (
    <View style={styles.container}>
      <ImageBackground style={styles.fundo}>
        <ImageBackground >

          <Text
            style={styles.input}
            placeholder=""
            onChangeText={setValorA}
            keyboardType="numeric">
            {valorB + operacao}
          </Text>
          <Text
            style={styles.input2}
            placeholder="sqsq"
            onChangeText={setValorB}
            keyboardType="numeric">
            {valorA}
          </Text>
        </ImageBackground>
        <ImageBackground style={styles.teclas}>
          <Pressable>
            <Text
              onPress={() => {
                setValorA('');
                setValorB('');
                setOperacao('')
              }}
              style={styles.botao}>
              {' '}
              C
            </Text>
          </Pressable>
          <Pressable>
            <Text
              onPress={() => {
                var del = valorA
                  console.log(del)
                  
                  return setValorA( del.substring(0, del.length - 1))

              }}
              style={styles.botao}>
              {' '}
              Del
            </Text>
          </Pressable>
          <Pressable>
            <Text
              onPress={() => {
                setValorA('%');
              }}
              style={styles.botao}>
              {' '}
              %
            </Text>
          </Pressable>
          <Pressable>
            <Text
              onPress={() => {
                setResultado(valorA);
                setOperacao('/');
                setValorB(valorA);
                setValorA('');
              }}
              style={styles.botao}>
              {' '}
              /
            </Text>
          </Pressable>
          <Pressable>
            <Text
              onPress={() => {
                setValorA(valorA + '7');
              }}
              style={styles.botao}>
              {' '}
              7
            </Text>
          </Pressable>
          <Pressable>
            <Text
              onPress={() => {
                setValorA(valorA + '8');
              }}
              style={styles.botao}>
              {' '}
              8
            </Text>
          </Pressable>
          <Pressable>
            <Text
              onPress={() => {
                setValorA(valorA + '9');
              }}
              style={styles.botao}>
              {' '}
              9
            </Text>
          </Pressable>
          <Pressable>
            <Text
              onPress={() => {
                setResultado(valorA);
                setOperacao('x');
                setValorB(valorA);
                setValorA('');
              }}
              style={styles.botao}>
              {' '}
              x
            </Text>
          </Pressable>
          <Pressable>
            <Text
              onPress={() => {
                setValorA(valorA + '4');
              }}
              style={styles.botao}>
              {' '}
              4
            </Text>
          </Pressable>
          <Pressable>
            <Text
              onPress={() => {
                setValorA(valorA + '5');
              }}
              style={styles.botao}>
              {' '}
              5
            </Text>
          </Pressable>
          <Pressable>
            <Text
              onPress={() => {
                setValorA(valorA + '6');
              }}
              style={styles.botao}>
              {' '}
              6
            </Text>
          </Pressable>
          <Pressable>
            <Text
              //josias
              onPress={() => {
                setResultado(valorA);
                setOperacao('+');
                setValorB(valorA);
                setValorA('');
              }}
              style={styles.botao}>
              {' '}
              +
            </Text>
          </Pressable>
          <Pressable>
            <Text
              onPress={() => {
                setValorA(valorA + '1');
              }}
              style={styles.botao}>
              {' '}
              1
            </Text>
          </Pressable>
          <Pressable>
            <Text
              onPress={() => {
                setValorA(valorA + '2');
              }}
              style={styles.botao}>
              {' '}
              2
            </Text>
          </Pressable>
          <Pressable>
            <Text
              onPress={() => {
                setValorA(valorA + '3');
              }}
              style={styles.botao}>
              {' '}
              3
            </Text>
          </Pressable>
          <Pressable>
            <Text
              onPress={() => {
                setResultado(valorA);
                setOperacao('-');
                setValorB(valorA);
                setValorA('');
              }}
              style={styles.botao}>
              {' '}
              -
            </Text>
          </Pressable>
          <Pressable>
            <Text
              onPress={() => {
                setValorA(valorA + '0');
              }}
              style={styles.botao0}>
              {' '}
              0
            </Text>
          </Pressable>
          <Pressable>
            <Text
              onPress={() => {
                if (operacao == 'x') {
                  setValorA(Number(valorA) * Number(resultado));
                }else if(operacao=='+'){
                  setValorA(Number(valorA) + Number(resultado));
                
                }else if(operacao=='-'){
                  setValorA(Number(resultado) - Number(valorA));
                
                }else if(operacao=='/'){
                  setValorA(Number(resultado) / Number(valorA));
                }
              }}
              style={styles.botao}>
              {' '}
              =
            </Text>
          </Pressable>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white'
  },
  h1: {
    fontSize: 35,
    width: 220,
    color: 'white',
    textAlign: 'center',
  },
  fundo: {
    flex: 1,
    margin: 0,
    alignItems: 'center',
    padding: 50,
  },
  capsula: {
    width: 400,
    backgroundColor: 'white',
  },
  input: {
    fontSize: 30,
    color: 'black',
    backgroundColor: 'white',
    width: 380,
    height: 100,
    textAlign: 'right',
    margin: 0,
  },
  input2: {
    color: 'black',
    fontSize: 60,
    backgroundColor: 'white',
    width: 380,
    height: 100,
    textAlign: 'right',
    margin: 0,
  },
  botao: {
    fontSize: 30,
    width: 100,
    height: 100,
    backgroundColor: 'white',
    textAlign: 'center',
    paddingTop: 40,
    borderColor: 'white',
  },
  teclas: {
    flex: 1,
    margin: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 400,
  },
  botao0: {
    fontSize: 30,
    width: 300,
    height: 100,
    backgroundColor: 'white',
    textAlign: 'center',
    paddingTop: 40,
    borderColor: 'white',
  },
});