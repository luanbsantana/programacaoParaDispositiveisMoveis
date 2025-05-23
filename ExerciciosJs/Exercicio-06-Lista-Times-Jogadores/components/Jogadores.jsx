import { StyleSheet, View,} from "react-native";
import React from "react";
import {Avatar, Card, Text} from "react-native-paper";

export default function Jogadores(props) {
  const { nome, numero, imagem } = props;
  return (
   
      
      <Card.Title
      
        title={nome}
        subtitle={"N°: " + numero}
        left={(props) => <Avatar.Image {...props} source={{ uri: imagem }} />}
      />
   
  );
}

const styles = StyleSheet.create({});
