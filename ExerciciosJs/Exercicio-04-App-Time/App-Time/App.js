import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';

export default function App() {
  function gol(){
    alert("Internacional")
  }
  return (
    <ScrollView>
    <View style={styles.container}>
    <Image
        source={require('./image/nossaHistoria.png')}
        style={{
          height: 150,
          width: 400
        }}
    />
      <Text style={styles.titulo}>Sport Club Internacional</Text>
      <Text style={styles.paragrafo}>A origem do Sport Club Internacional está ligada à integração entre povos de diferentes nacionalidades. Diferente de outros clubes da capital gaúcha da época, voltados principalmente a descendentes de alemães, o Inter surgiu acolhendo diversas etnias. Sua fundação foi conduzida diretamente pelos irmãos Henrique Poppe Leão, José Eduardo Poppe e Luiz Madeira Poppe, que chegaram a Porto Alegre por volta de 1908, em meio à efervescência do futebol no Brasil.</Text>
      <Image
        source={require('./image/fundadores.png')}
        style={{
          height: 350,
          width: 400
        }}
    />
      <Text style={styles.paragrafo}>A região da Ilhota, antigo bairro humilde e de forte influência cultural, foi berço do futebol colorado. O campo da Rua Arlindo, atual Praça Sport Club Internacional, abrigou os primeiros treinos da equipe colorada. Posteriormente, o local sediaria partidas da Liga da Canela Preta e revelaria um dos maiores craques do futebol brasileiro, o lendário Tesourinha. Em função das constantes enchentes que assolavam o bairro, o Clube se viu obrigado o trocar de sede, migrando, em 1910, para o Campo da Várzea, atual Parque da Redenção.</Text>
      <Text style={styles.paragrafo}>A estadia no Bonfim, junto a alunos do Colégio Militar, não durou muito e, em 1912, o Inter alugou a Chácara dos Eucaliptos. Era uma alameda com frente para a Rua da Azenha, no início da José de Alencar, o primeiro local de jogos exclusivo do Inter. Ali foi iniciada a primeira senda de vitórias do Clube do Povo, que venceu o Campeonato Citadino, em sequência, de 1913 e 1917.</Text>
      <Image
        source={require('./image/primeirosJogadore.png')}
        style={{
          height: 250,
          width: 300
        }}
    />
    <Text style={styles.paragrafo}>Foi na década de 1970 que o Internacional mostrou definitivamente quem era a maior força do sul do Brasil. O novo Estádio Beira-Rio correspondeu à expectativa da fanática torcida e foi palco para uma época dourada no Clube do Povo, que cravou sua bandeira no topo mais alto do futebol nacional. Foram três títulos brasileiros, um deles invicto – feito jamais igualado, assim como o octacampeonato gaúcho, conquistado entre 1969 e 1976. Uma década de craques como Falcão, Figueroa, Valdomiro, Carpegiani, Jair e muitos outros.</Text>
    <Image
        source={require('./image/gol.png')}
        style={{
          height: 250,
          width: 300
        }}
    /> 
    <Text style={styles.paragrafo}>Uma década mágica! Assim podem ser definidos os anos 2000 para o Internacional. Se em anos anteriores o Clube do Povo dominou o Brasil, na primeira década do século XXI a América e o Mundo ficaram vermelhos. A antiga obsessão pela Copa Libertadores finalmente chegou ao fim. Pelas mãos do eterno ídolo Fernandão, em 2006, a tradicional taça foi levantada pela primeira vez, em um Beira-Rio incandescente. Mas o ápice da redenção colorada chegaria no final do ano: o Mundial de Clubes da FIFA! Era de uma inesquecível geração vencedora, que eternizou, além do capitão da camisa 9, nomes como o de Tinga, Índio, Sobis e tantos outros.</Text>
    <Image
        source={require('./image/golMundial.png')}
        style={{
          height: 250,
          width: 300
        }}
    /> 
    <Button title='gol' onPress={gol} ></Button>
    <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  titulo: {
    fontSize: 35,
    marginTop: 20,
    fontWeight: 900,
    color: 'red',
  },
  paragrafo: {
    padding: 10,
    textAlign: 'justify'
  },
});
