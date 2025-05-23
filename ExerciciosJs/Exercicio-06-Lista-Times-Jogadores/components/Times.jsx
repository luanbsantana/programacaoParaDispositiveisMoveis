import { StyleSheet, View, FlatList } from "react-native";
import React from "react";
import { Card, Text } from "react-native-paper";
import Jogadores from "./Jogadores";

export default function Times(props) {
  const { nome, anoFundacao, mascote, imagem, jogadores } = props;

  return (
    <Card style={{margin: 20}}>
      <Card.Cover source={{ uri: imagem }} />
      <Card.Title title={nome} />
      <Card.Content>
        <Text>Mascote: {mascote}</Text>
        <Text>Ano de fundação: {anoFundacao}</Text>
        <Text variant="headlineSmall">Jogadores</Text>
        <Card.Actions>
            
          <FlatList
          horizontal
            data={jogadores}
            renderItem={({ item }) => (
              <Jogadores
                nome={item.nome}
                numero={item.numero}
                imagem={item.imagem}
              />
            )}
          />
        </Card.Actions>
      </Card.Content>
    </Card>
  );
}

const styles = StyleSheet.create({});
