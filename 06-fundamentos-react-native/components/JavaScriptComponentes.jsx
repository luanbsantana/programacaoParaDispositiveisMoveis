import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function JavaScriptComponentes() {
    const nome = "Luan";
    const idade = 27;

    function exibirNome(){
        return nome
    }
    function checarMaiorIdade(){
        if(idade >= 18){
            return "Maior de idade";
        }else{
            return "Menor de idade";
        }
    }

  return (
    <View style={styles.componenteJs}>
      <Text style={styles.texto}>Nome: {nome}</Text>
      <Text style={styles.texto}>Idade: {idade}</Text>
      <Text style={styles.texto}>Nome Por meio da Função: {exibirNome()}</Text>
      <Text style={styles.texto}>Resultado de uma conta: {2*5}</Text>
      <Text style={styles.texto}>Soma da idade: {idade + 20}</Text>
      <Text style={styles.texto}>Check maior idade: {checarMaiorIdade()}</Text>
      <Text style={styles.texto}>Check maior idade: {idade >= 18 ? "Maior idade" : "Menor idade"}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  componenteJs:{
    backgroundColor: '#548724',
    padding: 20,
    borderRadius: 10
  },
  texto:{
    color: '#f8f5f2'
  }
})