import React from "react";
import {View, Text, StyleSheet} from 'react-native';

export default function PrimeiroComponente() {

    return (
        <View style={styles.container}>   
            <Text style={styles.texto}>Primeiro Componente</Text>
        </View>

    );
    
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: 'red',
    },
    texto:{
        fontSize: 20,
        fontWeight: 600,
        padding: 15,
        color: '#fff'
    }
})