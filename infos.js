import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Infos( {route} ){
  const navigation = useNavigation()
  
  return(
    <View>
      <Text>Nome: {route.params?.nome}</Text>
      <Text>Idade: {route.params?.idade}</Text>
      <Text>Sexo: {route.params?.sexo}</Text>
      <Text>Escolaridade: {route.params?.escolaridade}</Text>
      <Text>Limite: {route.params?.limite}</Text>
      <Text>Nacionalidade: {route.params?.nacionalidade}</Text>
      <Button title='Voltar para tela Home' onPress={ () => navigation.goBack() }/>
    </View>
  )
}
