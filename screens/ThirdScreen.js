import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet , StatusBar, Alert, Button, ActivityIndicator, FlatList} from 'react-native';
import { format } from 'date-fns';


export default function ThirdScreen({ navigation }) {

    const [isLoading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const getData = async () => {
        try {
          const response = await fetch('https://api-postgress.vercel.app/api/data/getAll');
          const json = await response.json();
          setData(json.data.slice(-10));
        } catch (error) {
          console.error(error);
        } finally {
          setLoading(false);
        }
      };
      useEffect(() => {
        getData();
      }, []);

      const renderRow = ({ item }) => {
        const formattedDate = format(new Date(item.register_date), 'dd/MM/yyyy HH:mm:ss');
        return (
          <View style={styles.row}>
            <Text style={styles.cell}>{item.value_ppm}</Text>
            <Text style={styles.cell}>{formattedDate}</Text>
          </View>
        );
      };
      

    return (
        <View style={styles.container}> 
             <View style={styles.header}>
    
                <Text style={styles.headerCell}>Value PPM</Text>
                <Text style={styles.headerCell}>Register Date</Text>
            </View>

        {isLoading ? (
         <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <FlatList
                data={data} // Asegúrate de que `data` tenga elementos válidos
                renderItem={renderRow} // Componente para renderizar cada fila
                keyExtractor={(item) => item.id.toString()} // Usa el id como clave única
                contentContainerStyle={{ paddingBottom: 20 }} // Espacio debajo de la lista
              />
              
      )}
         </View>
    );
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#DBD2BF',
            paddingTop: StatusBar.currentHeight || 0,
            paddingHorizontal: 10, // Agrega un margen horizontal
          },
          header: {
            flexDirection: 'row',
            backgroundColor: '#ddd',
            padding: 10,
            marginBottom: 10,
          },
          headerCell: {
            flex: 1,
            fontWeight: 'bold',
            marginTop: '50',
            textAlign: 'center',
          },
          row: {
            flexDirection: 'row',
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#ccc',
          },
          cell: {
            flex: 1,
            textAlign: 'center',
            color: 'black', // Asegúrate de que el color contraste con el fondo
          },
          
      

      });