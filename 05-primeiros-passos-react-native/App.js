import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image, ScrollView } from 'react-native';

export default function App() {
  const nome = "Luan"
   function alerta() {
     alert("Vc apertou um botão")   
   }
  return (
    // Tudo dentro do return são codigos JSX que serão exibidos na tela
    // A tags usadas para mostrar na tela sempre sãp impotadas pelo "import"
    <ScrollView>
    

    <View style={styles.container}>
      <Text>Testando o aplicativo</Text>
      <Text style={{fontSize: 40}}>{nome}</Text>
      <Button title='Alerta' onPress={alerta}></Button>

      <Image 
        source={{ uri: 'https://images.steamusercontent.com/ugc/940586530515504757/CDDE77CB810474E1C07B945E40AE4713141AFD76/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false' }}
        style={{
          height: 300,
          width: 300,
          marginBottom: 20,
        }}
      />
      <Image
        source={require('./image/image.png')}
        style={{
          height: 300,
          width: 300
        }}
      />
      <StatusBar style="auto" />
    </View>
    </ScrollView>
    //Para usar codigos javaScript usar {}
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
