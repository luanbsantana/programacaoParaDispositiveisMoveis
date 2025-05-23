import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { Card, List } from 'react-native-paper'

export default function ReceitaScreen({ navigation, route }) {
    const { item } = route.params;
    console.log(route.params)
  return (
    <ScrollView style={{ padding: 10 }}>
      <Card>
        <Card.Cover source={{ uri: item.imagem }} />
        <Card.Title
          title={item.nome}
          subtitle={`Preparo: ${item.tempoPreparo} | Porções: ${item.porcoes}`}
        />
        <Card.Content>
          <Text variant="titleMedium" style={{ marginTop: 10, marginBottom: 5 }}>
            Ingredientes
          </Text>
          {item.ingredientes.map((ingrediente, index) => (
            <List.Item
              key={index}
              title={ingrediente}
              left={() => <List.Icon icon="circle-small" />}
            />
          ))}

          <Text variant="titleMedium" style={{ marginTop: 10, marginBottom: 5 }}>
            Modo de Preparo
          </Text>
          {item.modoPreparo.map((passo, index) => (
            <List.Item
              key={index}
              title={passo}
            />
          ))}
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
