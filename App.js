import { StatusBar } from 'expo-status-bar';
import {
  Text, View,
  TextInput, TouchableOpacity,
  Image
} from 'react-native';
import react, { useState } from 'react';
import iconSum from './img/mais.png';
import iconLess from './img/menos.png';
import iconDiv from './img/dividir.png';
import iconMulti from './img/vezes.png';
import iconErase from './img/erase.png';
import styles from './styles'

export default function App() {

  const [valorA, setValorA] = useState(0);
  const [valorB, setValorB] = useState(0);
  const [resultado, setResultado] = useState(0);

  function soma() {
    let r = Number.parseFloat(valorA.toString().replace(',', '.')) +
      Number.parseFloat(valorB.toString().replace(',', '.'));
    setResultado(r);
  }

  function menos() {
    let r = Number.parseFloat(valorA.toString().replace(',', '.')) -
      Number.parseFloat(valorB.toString().replace(',', '.'));
    setResultado(r);
  }

  function multi() {
    let r = Number.parseFloat(valorA.toString().replace(',', '.')) *
      Number.parseFloat(valorB.toString().replace(',', '.'));
    setResultado(r);
  }

  function div() {
    let r = Number.parseFloat(valorA.toString().replace(',', '.')) /
      Number.parseFloat(valorB.toString().replace(',', '.'));
    setResultado(r);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora</Text>

      <View style={styles.containerCampo}>
        <View>
          <Text style={styles.texto} >Primeiro valor:</Text>
        </View>

        <View style={styles.textoEIconeCampo}>

          <TextInput
            style={styles.caixaTexto}
            keyboardType='decimal-pad'
            onChangeText={(text) => setValorA(text)}
          />
        </View>

      </View>

      <View style={styles.containerCampo}>
        <View>
          <Text style={styles.texto} >Segundo valor: </Text>
        </View>

        <View style={styles.textoEIconeCampo}>
          <TextInput
            style={styles.caixaTexto}
            keyboardType='decimal-pad'
            onChangeText={(text) => setValorB(text)}
          />
        </View>
      </View>

      <View style={styles.areaBotoesCalculo}>
        <TouchableOpacity onPress={() => menos()}>
          <Image source={iconLess} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => soma()}>
          <Image source={iconSum} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => multi()}>
          <Image source={iconMulti} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => div()}>
          <Image source={iconDiv} />
        </TouchableOpacity>
      </View>

      <Text style={styles.legendaCampo} >Resultado</Text>
      <Text style={[styles.campoValor, styles.campoSomenteLeitura]} >
        {resultado && resultado.toFixed(2)}
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

