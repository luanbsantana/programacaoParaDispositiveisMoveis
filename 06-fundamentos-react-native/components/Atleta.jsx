import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

export default function Atleta(props) {

const {nome, idade, numero, imagem} = props

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Atleta</Text>
      <Text style={styles.texo}>Nome: {nome}</Text>
      <Text style={styles.texo}>Idade: {idade}</Text>
      <Text style={styles.texo}>Numero: {numero}</Text>
      <Text style={styles.texo}></Text>

      <Image
        source={{
            uri: imagem
        }}
        style={{height: 200, width: 200}}
      />

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#D5d5d5',
        padding: 10,
    }
})