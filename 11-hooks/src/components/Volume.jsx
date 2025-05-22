import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import {Card, Text, Button} from 'react-native-paper'

export default function Volume() {
const [volume, setVolume] = useState(0)

function aumentar(){
    if(volume < 10){
    setVolume(volume + 2)
}
}
function diminuir(){
    if(volume > 1){
    setVolume(volume - 1)
}
}
  return (
    <View style={{margin: 15}}>
        <Card>
            <Card.Content>
                <Text>Componente Volume</Text>
                <Text>Volume: {volume}</Text>
            </Card.Content>
            <Card.Actions>
                <Button onPress={diminuir}>Menos</Button>
                <Button onPress={aumentar}>Mais</Button>
            </Card.Actions>
        </Card>
    </View>
  )
}

const styles = StyleSheet.create({})