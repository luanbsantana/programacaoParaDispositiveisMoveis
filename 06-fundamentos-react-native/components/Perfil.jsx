//RNFS atalho para criar componente
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Perfil = (props) => {
  return (
    <View>
      <Text>Perfil</Text>
      <Text>Nome por meio de props: {props.nome}</Text>
      <Text>Sobrenome por meio de props: {props.sobrenome}</Text>
      <Text>Idade por meio de props: {props.idade}</Text>
    </View>
  )
}

export default Perfil

const styles = StyleSheet.create({})