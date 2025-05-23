import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'

export default function Filmes(props) {
    const {nome,  ano, diretor, tipo, capa} = props
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Nome: {nome}</Text>
      <Text style={styles.texto}>Ano: {ano}</Text>
      <Text style={styles.texto}>Diretor: {diretor}</Text>
      <Text style={styles.texto}>Tipo: {tipo}</Text>
      <Image
        source={{uri: capa}} style={{height: 200, width: 200}}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
    backgroundColor: '#274978',
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
    width: 350,
    },
    texto:{
        color: '#F1FAEE'
    }
})