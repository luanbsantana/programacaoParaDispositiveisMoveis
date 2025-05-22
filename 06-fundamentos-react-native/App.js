import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import PrimeiroComponente from "./components/PrimeiroComponente";
import SegundoComponente from "./components/SegundoComponente";
import JavaScriptComponentes from "./components/JavaScriptComponentes";
import Perfil from "./components/Perfil";
import ListaComponentes from "./components/ListaComponentes";
import Atleta from "./components/Atleta";

export default function App() {
 const listaAtleta = [
    {
      nome: "Adriano",
      idade: 40,
      numero: 10,
      imagem: "https://th.bing.com/th/id/OIP.ZjK-dxgb9h75ytVzpXpROgHaKE?&rs=1&pid=ImgDetMain",
    },
    {
      nome: "Felipe",
      idade: 36,
      numero: 1,
      imagem: "https://th.bing.com/th/id/R.40734e1966b333119df1c21f6dd4c213?rik=vpA6haMEBfAwaA&riu=http%3a%2f%2fc8.alamy.com%2fcomp%2fDAWED6%2fbrazilian-formula-1-pilot-felipe-massa-of-scuderia-ferrari-f1-team-DAWED6.jpg&ehk=ABgt8%2bCGPmAgluFLf6Kod7MQDJT0MV98FAH%2b8j2Bblk%3d&risl=&pid=ImgRaw&r=0",
    },
    {
      nome: "Senna",
      idade: 55,
      numer: 10,
      imagem: "https://th.bing.com/th/id/R.c83e288085987f074d037bd99c61474d?rik=xJfU0p7uiJ8tcg&riu=http%3a%2f%2fthumbor-prod-us-east-1.photo.aws.arc.pub%2f_G485sHSV6kIV8LvicCX2PBUpS4%3d%2farc-anglerfish-arc2-prod-copesa%2fpublic%2fKZJEQD77EBCBDENSYEBIFDB6SI.jpg&ehk=XkfKNAriIUYKMjV6q3m8V%2fezB4O5kj2qD5jeY3HSgm8%3d&risl=&pid=ImgRaw&r=0",
    }
  ]
 
  return (
    <ScrollView>
    <View style={styles.container}>
      <PrimeiroComponente />
      <SegundoComponente />
      <JavaScriptComponentes />

      <ListaComponentes>
        
      </ListaComponentes>
      <Atleta
        nome = "Adriano"
        numero = {10}
        idade = {38}
        imagem = 'https://th.bing.com/th/id/OIP.ZjK-dxgb9h75ytVzpXpROgHaKE?&rs=1&pid=ImgDetMain'   
      />
      {
        listaAtleta.map(
          atleta =>{
            return(
              <Atleta
                nome={atleta.nome}
                idade={atleta.idade}
                numero={atleta.numero}
                imagem={atleta.imagem}
              />
            )
          }
        )
      }
      {/* <Perfil
        nome = "Luan"
        sobrenome = "Barboza"
        idade = {27}
      />
      <Perfil
        nome = "joão"
        sobrenome = "Silva"
        idade = {25}
      />
      <Perfil
        nome = "Maria"
        sobrenome = "Silva"
        idade = {28}
      /> */}
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
