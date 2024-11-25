import { StatusBar } from 'expo-status-bar';
import React  from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}> 
      <Image style={styles.image1} source={require('../assets/gas2.png')}/>
      <Text style={styles.titulo}>Smart Gas Detector </Text>
      <Text style={styles.texto}>La seguridad de tu hogar desde tu telefono movil </Text>
      <Button
          title="Comenzar ->"
          onPress={() => navigation.navigate('Second')}
        />
      <StatusBar style="auto" /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#DBD2BF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    fontFamily: 'montserrat',
    fontSize: 52,
    fontWeight: 'semibold',
    color: '#646464',
    textAlign: 'center'
  },
  texto:{
    fontFamily: 'montserrat',
    fontSize: 24,
    paddingLeft: 20,
    paddingRight: 20,
    fontWeight: '200',
    textAlign: 'center'

  },
  image1: {
    width: 352,
    height: 470,
  }
});
