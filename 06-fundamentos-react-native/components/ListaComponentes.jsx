import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ListaComponentes() {
  const listaCarros = ["Gol", "Palio", "Celta", "Uno", "Astra", "Corola"];
  return (
    <View style={styles.container}>
      {listaCarros.map(
        (carro) => {
        return(
            <View style={styles.containerTexto}>
            <Text style={styles.texto}>{carro}</Text>
            </View>
        ) 
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#849875",
    padding: 12,
    color: "#fff",
    marginTop: 10,
  },
  containerTexto:{
    backgroundColor: '#849898',
    padding: 10,
    marginTop: 10,
  },
  texto:{
    color: '#f2f2f2'
  }
});
