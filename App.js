import React, { useState } from 'react'
import { useNavigation, NavigationContainer } from '@react-navigation/native'
import home from './src/home/index'
import infos from './src/infos/index'
import { createStackNavigator } from '@react-navigation/stack'

export default function App(){
  const Stack = createStackNavigator();

  return(  
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={home} />
        <Stack.Screen name="Infos" component={infos} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
