import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Filmes from "./components/Filmes";
import Series from "./components/Series";

export default function App() {
  const listaFilmes = [
    {
      nome: "A Doce Vida",
      ano: 1960,
      diretor: "Federico Fellini",
      tipo: "Drama",
      capa: "https://upload.wikimedia.org/wikipedia/pt/0/04/La_Dolce_Vita.jpg",
    },
    {
      nome: "Psicose",
      ano: 1960,
      diretor: "Alfred Hitchcock",
      tipo: "Terror",
      capa: "https://th.bing.com/th/id/OIP.XOoJM7kgHCK6wZS5bwF4VAAAAA?rs=1&pid=ImgDetMain",
    },
    {
      nome: "O Beijo da Mulher Aranha",
      ano: 1985,
      diretor: "Hector Babenco",
      tipo: "Drama",
      capa: "https://upload.wikimedia.org/wikipedia/pt/thumb/8/8b/Kiss_Of_The_Spiderwoman.jpg/250px-Kiss_Of_The_Spiderwoman.jpg",
    },
    {
      nome: "Poltergeist - O Fenômeno",
      ano: 1982,
      diretor: "Tobe Hooper",
      tipo: "Terror",
      capa: "https://th.bing.com/th/id/OIP.A6j_7MGiMWaExTd7MX0ZNgHaLH?rs=1&pid=ImgDetMain",
    },
  ];

  const listaSeries = [
    {
    nome: "Buffy, a Caça-Vampiros",
    ano: 1997,
    diretor: "Joss Whedon",
    temporadas: 7,
    capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Buffy_the_vampire_slayer.svg/250px-Buffy_the_vampire_slayer.svg.png"
    },
    {
    nome: "Desperate Housewives",
    ano: 2004,
    diretor: "Marc Cherry",
    temporadas: 8,
    capa: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Desperate_Housewives_Logo.svg/250px-Desperate_Housewives_Logo.svg.png"
    },
    {
    nome: "Sons of Anarchy",
    ano: 2008,
    diretor: "Kurt Sutter",
    temporadas: 7,
    capa: "https://upload.wikimedia.org/wikipedia/pt/7/7b/SOATitlecard.jpg"
    }
    ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.h1}>Filmes</Text>
        {listaFilmes.map((filmes) => {
          return (
            <Filmes
              nome={filmes.nome}
              ano={filmes.ano}
              diretor={filmes.diretor}
              tipo={filmes.tipo}
              capa={filmes.capa}
            />
          );
        })}
        <Text style={styles.h1}>Series</Text>
        {listaSeries.map((series)=>{
          return(
            <Series
              nome={series.nome}
              ano={series.ano}
              diretor={series.diretor}
              tipo={series.temporadas}
              capa={series.capa}
            />
          )
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1D3557",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 50,
    padding: 10
  },
  h1: {
    fontSize: 30,
    marginBottom: 10,
    color: '#F1FAEE',
    backgroundColor: "#E63946",
    width: 450,
    textAlign: 'center',
    padding: 20
  }
});
