import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import {Card, Text, Button} from 'react-native-paper'

export default function Nome() {
const[nome, setNome] = useState('????')
const[numero, setNumero] = useState(0)

    
    function esconder(){
        setNome('????') 
        setNumero(numero + 1)
        console.log(nome)
    }
    function revelar(){
        setNome("Luan")
        setNumero(numero + 1)
        console.log(nome)
    }
  return (
    <View>
      <Card>
        <Card.Content>
            <Card.Title title="Componente Nome"/>
            <Text>Nome: {nome}</Text>
            <Text>Contador: {numero}</Text>
        </Card.Content>
        <Card.Actions>
            <Button onPress={esconder}>Esconder</Button>
            <Button onPress={revelar}>Revelar</Button>
        </Card.Actions>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({})