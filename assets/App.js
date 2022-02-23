import { StatusBar } from 'expo-status-bar';
import {
  Text, View,
  TextInput, TouchableOpacity,
  Image
} from 'react-native';
import react, { useState } from 'react';
import iconErase from './img/erase.png';
import styles from './styles'


export default function App() {

  const [valorA, setValorA] = useState(0);
  const [valorB, setValorB] = useState(0);
  const [resultado, setResultado] = useState(0);

  function soma() {
    let r = Number.parseFloat(valorA.replace(',', '.')) +
      Number.parseFloat(valorB.replace(',', '.'));
    setResultado(r);
  }




  return (
    <View style={styles.container}>

      <Text style={styles.titulo} >Projeto Calculadora</Text>

      <View style={styles.containerCampoA}>
        <View>
          <Text style={styles.texto} >Digite um valor:</Text>
          <TextInput
            style={styles.caixaTexto}
            placeholder='Digite algo...'
            keyboardType='decimal-pad'
            onChangeText={(text) => setValorA(text)}
            value={valorA}
          />
        </View>

        <View style={styles.containerIconeCampoA}>
          <TouchableOpacity onPress={() => setValorA(0)}  >
            <Image source={iconErase}
              style={styles.iconErase} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.containerCampoB}>
        <View>
          <Text style={styles.texto} >Digite outro valor: </Text>
        </View>

        <View style={styles.textoEIconeCampoB}>
          <TextInput
            style={styles.caixaTexto}
            placeholder='Digite outro valor'
            keyboardType='decimal-pad'
            onChangeText={(text) => setValorB(text)}
            value={valorB}
          />

          <TouchableOpacity onPress={() => setValorB(0)}  >
            <Image source={iconErase}
              style={styles.iconErase} />
          </TouchableOpacity>

        </View>
      </View>

      <TouchableOpacity style={styles.botao} onPress={() => soma()}>
        <Text style={styles.textoBotao}>Calcular</Text>
      </TouchableOpacity>

      <Text style={styles.texto}>
        Resultado: {resultado.toFixed(2)}
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

