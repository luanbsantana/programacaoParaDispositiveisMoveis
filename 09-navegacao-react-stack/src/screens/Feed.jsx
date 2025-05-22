import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

export default function Feed({navigation, route}) {
  return (
    <View>
      <Text>Feed</Text>
      <Text>Feed</Text>
      <Text>Feed</Text>
      <Text>Feed</Text>
      <Text>Feed</Text>
      <Text>Feed</Text>
      <Text>Feed</Text>
      <Text>Feed</Text>
      <Text>parametros{route.params.name}</Text>
      <Button mode='contained' onPress={() => navigation.goBack()}>Voltar</Button>
      <Button mode='contained' onPress={()=>navigation.navigate('Posts')}>Ir para Posts</Button>
    </View>
  )
}

const styles = StyleSheet.create({})