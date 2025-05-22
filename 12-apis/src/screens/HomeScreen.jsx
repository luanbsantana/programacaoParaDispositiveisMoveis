import { FlatList, StyleSheet, View } from "react-native";
import { Card, Text, Avatar, IconButton, ActivityIndicator, MD2Colors} from "react-native-paper";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function HomeScreen() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users?delay=2000")
      .then((resposta) => {
        console.log(resposta.data.users);
        setUsuarios(resposta.data.users);
      })
      .catch((erro) => {
        alert("Erro ao comunicar com a API!!!");
      });
  }, []);
  return (
    <View>
      <FlatList
        data={usuarios}
        renderItem={({ item }) => (
          <Card style={{ margin: 5 }}>
            <Card.Title
              title={item.firstName + " " + item.lastName}
              subtitle={item.email}
              left={(props) => (
                <Avatar.Image {...props} source={{ uri: item.image }} />
              )}
              right={(props) => (
                <IconButton
                  {...props}
                  icon="chevron-right"
                  onPress={() => {}}
                />
              )}
            />
          </Card>
        )}
        ListEmptyComponent={() => (
          <View style={styles.load}>
            <ActivityIndicator animating={true} color={MD2Colors.red800} size={80}/>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  load:{
    height: 750,
    alignItems: 'center',
    justifyContent: 'center'
    }
});
