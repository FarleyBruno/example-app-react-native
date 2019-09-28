import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Platform,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const lista = [
  {
    data: '22/09/2019',
    title: 'Conta de Luz',
    price: 'R$ 34,00'
  },
  {
    data: '25/09/2019',
    title: 'Conta de Agua',
    price: 'R$ 45,00'
  },
  {
    data: '26/09/2019',
    title: 'Conta de Gas',
    price: 'R$ 22,00'
  },
  {
    data: '30/09/2019',
    title: 'Conta de Telefone',
    price: 'R$ 65,00'
  },
  {
    data: '31/09/2019',
    title: 'Gastos com putas',
    price: 'R$ 50,00'
  },
]

const App = props => {
  console.log(lista.length)

  return (
    <View style={styles.container}>
      <LinearGradient colors={['#4218b8', '#00c0ff']} style={styles.header} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
        <TouchableOpacity onPress={() => acao()}>
          <Text style={styles.colorText}>X</Text>
        </TouchableOpacity>
        <Text style={styles.colorText}>Transações</Text>
        <TouchableOpacity>
          <Text style={styles.colorText}>Agenda</Text>
        </TouchableOpacity>
      </LinearGradient>
      <ScrollView 
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingVertical: 20
        }}
        showsVerticalScrollIndicator={false}
      >
        { lista.map((item, key) => (
          <View style={styles.item} key={key}>
            <Text>{item.data}</Text>
            <View style={styles.content}>
              <Text>{item.title}</Text>
              <Text>{item.price}</Text>
            </View>
          </View> 
        )) }
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },  
  header: {
    paddingTop: getStatusBarHeight(),
    paddingHorizontal: 20,
    height: Platform.OS === 'ios' ? getStatusBarHeight() + 60 : 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  colorText: {
    color: '#FFF',
    fontWeight: 'bold'
  },
  item: {
    width: '100%',
    height: 80,
    borderBottomWidth: 1,
    borderBottomColor: '#e1e1e1',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 1,
  }
});

export default App;
