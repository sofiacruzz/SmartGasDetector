import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet , StatusBar, Alert, Button, ActivityIndicator, FlatList} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';


const SecondScreen = ({navigation}) => {
    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const getData = async () => {
        try {
          const response = await fetch('https://api-postgress.vercel.app/api/data/getAll');
          const json = await response.json();
          setData(json.data.slice(-1));
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
      useEffect(() => {
        getData();
      }, []);

  return (

    <View style={styles.container}>
    <View style={styles.card}>
    <View>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text style={styles.title}>
              {item.value_ppm},
            </Text>
        
          )}
        />
      )}
      <Text style={styles.description}>PPM</Text>
      <FlatList
          data={data}
          keyExtractor={({id}) => id}
          renderItem={({item}) => (
            <Text style={styles.texto}>
               Ultima actualizacion: {item.register_date}
            </Text>
        
          )}
        />
      
    </View>
    </View>
    <View style={styles.button1}>
        <Button title="Ir a lista de registros >>" 
        color={'white'}
        onPress={() => navigation.navigate('Third')} />
      </View>
      <View style={styles.button1}>
        <Button title="Cerrar gas" 
        color={'white'}
        onPress={() => Alert.alert('Simple Button pressed')} />
      </View>
    <View style={styles.buttonContainer}>
        <Button title="EMERGENCIA" 
        color={'white'}
        onPress={() => Alert.alert('Simple Button pressed')} />
      </View>
      <StatusBar style="auto" /> 
  </View>


  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#DED3BC',
      },
      card: {
        width: '90%',
        backgroundColor: 'rgba(153, 147, 134, 0.28)',
        borderRadius: 10,
        padding: 20,
        marginTop: '100',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        marginBottom: 10,
      },
      title: {
        fontSize: 52,
        marginTop: '20',
        color: '#1EB200',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 10,
      },
      description: {
        fontSize: 14,
        textAlign: 'center',
        color: '#555',
      },
      texto: {
        fontSize: 14,
        marginTop: '50',
        color: '#555',
      },
      button1:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        marginTop: '30',
        backgroundColor: '#189EB6',
      },
      buttonContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#B90000',
        marginTop: '200',
    
      },
});

export default SecondScreen;  // Exporta el componente correctamente
