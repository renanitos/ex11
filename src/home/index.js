import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { View, Text, TextInput, Button, Switch} from 'react-native';
import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';
import { styles } from './styles';


export default function Home( {route} ){
  const navigation = useNavigation()

  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')
  const [sexo, setSexo] = useState(0)
  const [escolaridade, setEscolaridade] = useState(0)
  const [limite, setLimite] = useState(0)
  const [brasileiro, setBrasileiro] = useState(true)

  const infos = {
    nome: nome, 
    idade: idade,
    sexo: sexo ? sexo : '',
    escolaridade: escolaridade ?escolaridade : '',
    limite: limite,
    nacionalidade: (brasileiro ? 'BR' : 'Gringo')
  }

  let sexos = [
        {id: 1, nome: 'Escolha'},
        {id: 2, nome: 'Masculino'},
        {id: 3, nome: 'Feminino'},
        {id: 4, nome: 'Outro'},
        {id: 5, nome: 'Prefere não opinar'}
  ]

  let escolaridades = [
        {id: 1, nome: 'Escolha'},
        {id: 2, nome: 'Ensino Médio Incompleto'},
        {id: 3, nome: 'Ensino Médio Completo'},
        {id: 4, nome: 'Ensino Superior Incompleto'},
        {id: 5, nome: 'Ensino Superior Completo'}
  ]
  
  let sexosItem = sexos.map( (valor, chave) => {
    return <Picker.Item key={chave} value={valor.nome} label={valor.nome}/>
  })
  let escolaridadesItem = escolaridades.map( (valor, chave) => {
    return <Picker.Item key={chave} value={valor.nome} label={valor.nome}/>
  })

  function aparecerInfos() {
      navigation.navigate('Infos', infos)
  }

  return(
    <View>
      <Text style={styles.titulo}>Abertura de Conta</Text>

      <View style={styles.row}>
        <Text style={styles.campos}>Nome: </Text>
        <TextInput
        style={styles.input}
        onChangeText={ (nome) => setNome(nome) }
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.campos}>Idade: </Text>
        <TextInput
        style={styles.input}
        onChangeText={ (idade) => setIdade(idade) }
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.campos}>Sexo: </Text>
        <Picker
          selectedValue={sexo}
          onValueChange={ (itemValue, itemIndex) => setSexo(itemValue) }
          >
          {sexosItem}
        </Picker>
      </View>
      <View style={styles.row}>
        <Text style={styles.campos}>Escolaridade: </Text>
        <Picker
          selectedValue={escolaridade}
          onValueChange={ (itemValue, itemIndex) => setEscolaridade(itemValue) }
          >
          {escolaridadesItem}
        </Picker>
      </View>
      <View style={styles.row}>
        <Text style={styles.campos}>Limite: </Text>
        <Slider
          minimumValue={0}
          maximumValue={1000}
          onValueChange={ (valorSelecionado) => setLimite(valorSelecionado)}
          value={limite}
          step={1}
          style={styles.slider}
        />
      </View>
      <Text style={styles.limite}>{limite.toFixed(0)}</Text>
      <View style={styles.row}>
        <Text style={styles.campos}>Brasileiro: </Text>
        <Switch 
          value={brasileiro}
          onValueChange={ (valorSwitch) => setBrasileiro(valorSwitch)}
          style={styles.switch}
          />

      </View>

      <Button title="Confirmar" onPress={aparecerInfos} />
    </View>
  )
}
