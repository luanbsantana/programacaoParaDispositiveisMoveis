import { StyleSheet, View, ScrollView} from 'react-native'
import React from 'react'
import {Text, Card, Title, Paragraph} from 'react-native-paper'

export default function HomeScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
      <Text variant='headlineSmall' style={{fontWeight: 800}}>HomeScreen</Text>
      <Card>
        <Card.Content>
          <Title>Um titulo</Title>
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi quos dolores eos ex itaque error quia perferendis debitis aliquam accusamus pariatur, omnis veritatis at consectetur. Voluptatum alias expedita unde quia.
            Asperiores, impedit modi. Debitis hic blanditiis facere quam fugiat! Alias nesciunt magnam neque, mollitia iure a saepe ad doloribus ab quisquam sapiente quod enim tenetur at quas, facere, esse reiciendis.
          </Paragraph>
        </Card.Content>
        <Card.Content>
          <Card.Cover source={{ uri: 'https://th.bing.com/th/id/R.02f93c338b0633f5de6c3c6487b4a28c?rik=oWluUPVJk85XIQ&pid=ImgRaw&r=0'}}/>
        </Card.Content>
      </Card>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#f6f6c6',
    flex: 1,
    alignItems: 'center',
    padding: 20
  }
})