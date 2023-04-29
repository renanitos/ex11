import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';

export default function Infos( {route} ){
  return(
    <View>
      <Text style={styles.titulo}> Informações do {route.params?.nome} </Text>
      <Text style={styles.campos}>Nome: {route.params?.nome}</Text>
      <Text style={styles.campos}>Idade: {route.params?.idade}</Text>
      <Text style={styles.campos}>Sexo: {route.params?.sexo}</Text>
      <Text style={styles.campos}>Escolaridade: {route.params?.escolaridade}</Text>
      <Text style={styles.campos}>Limite: {route.params?.limite}</Text>
      <Text style={styles.campos}>Nacionalidade: {route.params?.nacionalidade}</Text>
    </View>
  )
}
